import React from "react";
import type { FlightStatus } from "../../../../model/flight";

interface StatusColumnProps {
  value: FlightStatus;
}
function StatusColumn({ value }: StatusColumnProps) {
  const styles = {
    "on-time": "text-green-400",
    delayed: "text-red-400",
    cancelled: "text-gray-400",
  };

  return (
    <div className={`flex items-center gap-2 ${styles[value]} m-auto`}>
      <span className="w-2 h-2 rounded-full bg-current" />
      <span className="text-sm font-medium">
        {value.replace("-", " ").toUpperCase()}
      </span>
    </div>
  );
}

export default React.memo(StatusColumn);
