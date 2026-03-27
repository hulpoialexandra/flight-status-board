import { useCallback, useEffect, useMemo, useState } from "react";
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

  const filteredFlights = useMemo(
    () => filterFlights(flights, status),
    [flights, status]
  );
  const groupedFlights = useMemo(() => {
    if (groupBy === "none") return null;
    return getGroupedFlights(filteredFlights, groupBy as keyof Flight);
  }, [filteredFlights, groupBy]);

  const loadFlights = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchFlightsWithFailureSimulation(failureRate);
      setLastUpdated(new Date());
      setFlights(data);
    } catch (err) {
      console.error(err);
      setFlights([]);
      setError("Failed to fetch flights");
      setRetrying(true);

      setTimeout(async () => {
        try {
          const data = await fetchFlightsWithFailureSimulation(failureRate);
          setLastUpdated(new Date());
          setFlights(data);
          setError(null);
        } catch {
          setError("Failed to fetch flights");
        } finally {
          setRetrying(false);
        }
      }, 2000);
    } finally {
      setLoading(false);
    }
  }, [failureRate]);

  useEffect(() => {
    const loadInterval = setInterval(loadFlights, 30000);

    return () => clearInterval(loadInterval);
  }, [loadFlights]);

  useEffect(() => {
    loadFlights();
  }, []);

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
