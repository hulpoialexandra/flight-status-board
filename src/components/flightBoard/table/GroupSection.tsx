import React from "react";
import type { Flight } from "../../../model/flight";
import type { Column } from "../../../model/table";
import Row from "./Row";

interface GroupSectionProps {
  columns: Column[];
  flights: Flight[];
  groupLabel?: string;
}

function GroupSection({ columns, flights, groupLabel }: GroupSectionProps) {
  return (
    <div>
      {groupLabel && (
        <h2 className="text-lg font-semibold my-2 text-gray-300">
          {groupLabel}
        </h2>
      )}
      <div className="border border-gray-800 rounded-xl overflow-hidden">
        {flights.map((flight) => (
          <Row key={flight.flightNumber} columns={columns} flight={flight} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(GroupSection);
