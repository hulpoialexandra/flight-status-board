import React from "react";

interface FailureRateProps {
  failureRate: number;
  setFailureRate: (value: number) => void;
}

function FailureRate({ failureRate, setFailureRate }: FailureRateProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-300">
      <label>Failure rate:</label>
      <input
        type="number"
        min={0}
        max={1}
        step={0.1}
        value={failureRate}
        onChange={(e) => setFailureRate(Number(e.target.value))}
        className="w-16 px-2 py-1 rounded bg-gray-800 text-white border border-gray-600"
      />
    </div>
  );
}

export default React.memo(FailureRate);
