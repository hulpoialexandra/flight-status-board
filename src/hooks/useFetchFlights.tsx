import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Flight } from "../model/flight";
import { fetchFlightsWithFailureSimulation } from "../api/get-flights";
import type { FlightStatusFilterType, GroupByType } from "../model/filters";
import { filterFlights } from "../utils/filterFlights";
import { getGroupedFlights } from "../utils/groupFlights";

interface UseFetchFlightsProps {
  status: FlightStatusFilterType;
  groupBy: GroupByType;
  failureRate?: number;
}
export const useFetchFlights = ({
  status,
  groupBy,
  failureRate,
}: UseFetchFlightsProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [retrying, setRetrying] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);
  const retryTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const failureRateRef = useRef(failureRate);
  failureRateRef.current = failureRate;

  const filteredFlights = useMemo(
    () => filterFlights(flights, status),
    [flights, status]
  );
  const groupedFlights = useMemo(() => {
    if (groupBy === "none") return null;
    return getGroupedFlights(filteredFlights, groupBy);
  }, [filteredFlights, groupBy]);

  const loadFlights = useCallback(async () => {
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      setLoading(true);
      setError(null);
      const data = await fetchFlightsWithFailureSimulation(
        failureRateRef.current,
        controller.signal
      );
      if (controller.signal.aborted) return;
      setLastUpdated(new Date());
      setFlights(data);
    } catch (err) {
      if (controller.signal.aborted) return;
      console.error(err);
      setError("Failed to fetch flights");
      setRetrying(true);

      retryTimeoutRef.current = setTimeout(async () => {
        const retryController = new AbortController();
        abortControllerRef.current = retryController;

        try {
          const data = await fetchFlightsWithFailureSimulation(
            failureRateRef.current,
            retryController.signal
          );
          if (retryController.signal.aborted) return;
          setLastUpdated(new Date());
          setFlights(data);
          setError(null);
        } catch {
          if (retryController.signal.aborted) return;
          setError("Failed to fetch flights");
        } finally {
          if (!retryController.signal.aborted) {
            setRetrying(false);
          }
        }
      }, 2000);
    } finally {
      if (!controller.signal.aborted) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    loadFlights();
    const loadInterval = setInterval(loadFlights, 30000);

    return () => {
      clearInterval(loadInterval);
      abortControllerRef.current?.abort();
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, [loadFlights]);

  return {
    flights,
    lastUpdated,
    filteredFlights,
    groupedFlights,
    loading,
    error,
    retrying,
  };
};
