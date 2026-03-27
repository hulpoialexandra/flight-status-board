import React from "react";
import type { Flight } from "../../../model/flight";
import type { Column } from "../../../model/table";

interface RowProps {
  columns: Column[];
  flight: Flight;
}

function Row({ columns, flight }: RowProps) {
  return (
    <div
      className="grid px-4 py-3 items-center border-b border-gray-800 h-[54px]"
      style={{
        gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
      }}
    >
      {columns.map((column) => (
        <div key={column.key}>{column.render(flight)}</div>
      ))}
    </div>
  );
}

export default React.memo(Row);
