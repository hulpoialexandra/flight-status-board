import React from "react";
import type { Column } from "../../../model/table";

interface HeaderProps {
  columns: Column[];
}

function Header({ columns }: HeaderProps) {
  return (
    <div
      className="grid px-4 py-2 text-xs tracking-wide text-gray-400 bg-gray-900 border-b border-gray-800"
      style={{
        gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
      }}
    >
      {columns.map((column) => (
        <div key={column.key}>{column.label}</div>
      ))}
    </div>
  );
}

export default React.memo(Header);
