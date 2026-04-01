import React, { useMemo, useState } from "react";
import GroupSection from "./GroupSection";
import Header from "./Header";
import type {
  FlightStatusFilterType,
  GroupByType,
} from "../../../model/filters";
import { ALL_COLUMNS } from "./config";
import Loading from "../../Loading";
import ErrorMessage from "../../ErrorMessage";
import { useFetchFlights } from "../../../hooks/useFetchFlights";
import FailureRate from "../../FailureRate";
import FetchStatus from "../../FetchStatus";

interface TableProps {
  status: FlightStatusFilterType;
  groupBy: GroupByType;
}

function Table({ status, groupBy }: TableProps) {
  const columns = useMemo(
    () => ALL_COLUMNS.filter((column) => column.key !== groupBy),
    [groupBy]
  );
  const [failureRate, setFailureRate] = useState(0);

  const {
    flights,
    lastUpdated,
    filteredFlights,
    groupedFlights,
    loading,
    error,
    retrying,
  } = useFetchFlights({
    status,
    groupBy,
    failureRate,
  });

  const lastUpdatedText = lastUpdated
    ? `Last updated: ${lastUpdated.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`
    : "";

  const fetchStatus = error
    ? retrying
      ? `${error}. Retrying...`
      : error
    : loading
    ? "Fetching..."
    : undefined;

  return (
    <div>
      <div className="flex justify-between mb-2">
        <FailureRate
          failureRate={failureRate}
          setFailureRate={setFailureRate}
        />
        <FetchStatus
          lastUpdatedText={lastUpdatedText}
          fetchStatus={fetchStatus}
        />
      </div>
      {error && flights.length === 0 ? (
        <ErrorMessage message={retrying ? `${error}. Retrying...` : error} />
      ) : (
        <>
          <Header columns={columns} />

          {loading && filteredFlights.length === 0 ? (
            <Loading columns={columns.length} />
          ) : (
            <>
              {groupedFlights ? (
                <>
                  {Object.entries(groupedFlights).map(([group, flights]) => (
                    <GroupSection
                      key={group}
                      columns={columns}
                      groupLabel={`${groupBy.toUpperCase()} - ${group}`}
                      flights={flights}
                    />
                  ))}
                </>
              ) : (
                <GroupSection columns={columns} flights={filteredFlights} />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}

export default React.memo(Table);
