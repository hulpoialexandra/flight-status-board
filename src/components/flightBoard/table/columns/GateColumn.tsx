import React from "react";

interface GateColumnProps {
  value: string;
}
function GateColumn({ value }: GateColumnProps) {
  return <div className="text-gray-300">{value}</div>;
}

export default React.memo(GateColumn);
