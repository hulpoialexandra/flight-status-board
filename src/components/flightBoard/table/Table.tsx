import React, { useMemo, useState } from "react";
import GroupSection from "./GroupSection";
import Header from "./Header";
import type {
  FlightStatusFilterType,
  GroupByType,
} from "../../../model/filters";
import { ALL_COLUMNS } from "./config";
import Loading from "../../Loading";
import Error from "../../Error";
import { useFetchFlights } from "../../../hooks/useFetchFlights";

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

  return (
    <div>
      <div className="flex justify-between mb-2">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <label>Failure rate:</label>
          <input
            type="number"
            min={0}
            max={1}
            step={0.1}
            value={failureRate}
            onChange={(e) => setFailureRate(Number(e.target.value))}
            className="w-16 px-2 py-1 rounded bg-gray-800 text-white border border-gray-600"
          />
        </div>
        <div className="text-sm text-gray-400 self-end">
          Last updated:{" "}
          {lastUpdated?.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
      {error && flights.length === 0 ? (
        <Error message={retrying ? `${error}. Retrying...` : error} />
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
