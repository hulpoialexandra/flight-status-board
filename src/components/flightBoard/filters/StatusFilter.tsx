import React from "react";
import type { FlightStatusFilterType } from "../../../model/filters";
import FilterButton from "./FilterButton";

const FLIGHT_STATUS_FILTERS: FlightStatusFilterType[] = [
  "all",
  "on-time",
  "delayed",
  "cancelled",
];

interface StatusFilterProps {
  status: FlightStatusFilterType;
  setStatus: (status: FlightStatusFilterType) => void;
}

function StatusFilter({ status, setStatus }: StatusFilterProps) {
  return (
    <div className="flex gap-2">
      {FLIGHT_STATUS_FILTERS.map((s) => (
        <FilterButton
          key={s}
          label={s.toUpperCase()}
          selected={status === s}
          onClick={() => setStatus(s)}
        />
      ))}
    </div>
  );
}

export default React.memo(StatusFilter);
