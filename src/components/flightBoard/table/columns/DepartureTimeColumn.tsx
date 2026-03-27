import React from "react";

interface DepartureTimeColumnProps {
  value: string;
}
function DepartureTimeColumn({ value }: DepartureTimeColumnProps) {
  return <div className="font-mono">{value}</div>;
}

export default React.memo(DepartureTimeColumn);
