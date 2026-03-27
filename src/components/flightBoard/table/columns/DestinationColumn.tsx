import React from "react";

interface DestinationColumnProps {
  value: string;
}
function DestinationColumn({ value }: DestinationColumnProps) {
  return <div className="text-gray-300 truncate">{value}</div>;
}

export default React.memo(DestinationColumn);
