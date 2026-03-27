import React from "react";

interface TerminalColumnProps {
  value: string;
}
function TerminalColumn({ value }: TerminalColumnProps) {
  return <div className="text-gray-300">{value}</div>;
}

export default React.memo(TerminalColumn);
