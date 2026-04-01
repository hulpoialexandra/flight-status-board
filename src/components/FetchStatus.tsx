import React from "react";

interface FetchStatusProps {
  lastUpdatedText: string;
  fetchStatus?: string;
}

function FetchStatus({ lastUpdatedText, fetchStatus }: FetchStatusProps) {
  return (
    <div className="text-sm text-gray-400 self-end h-[40px] text-right">
      {lastUpdatedText && <p>{lastUpdatedText}</p>}
      {fetchStatus && <p>{fetchStatus}</p>}
    </div>
  );
}

export default React.memo(FetchStatus);
