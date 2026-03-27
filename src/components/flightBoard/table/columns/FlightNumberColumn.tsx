import React from "react";

interface FlightNumberColumnProps {
  value: string;
}
function FlightNumberColumn({ value }: FlightNumberColumnProps) {
  return <div className="font-semibold">{value}</div>;
}

export default React.memo(FlightNumberColumn);
