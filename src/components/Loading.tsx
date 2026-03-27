const LOADING_ROWS = 10;

interface LoadingProps {
  columns?: number;
}
function Loading({ columns = 6 }: LoadingProps) {
  return (
    <div className="animate-pulse">
      {Array.from({ length: LOADING_ROWS }).map((_, row) => (
        <div
          key={row}
          className="grid px-4 py-3 border-b border-gray-800 h-[54px] place-items-center"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: columns }).map((_, col) => (
            <div key={col} className="h-4 bg-gray-700 rounded w-4/5" />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Loading;
