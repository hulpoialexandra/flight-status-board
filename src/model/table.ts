import type { Flight } from "./flight";

export type ColumnKey =
  | "flight"
  | "destination"
  | "time"
  | "gate"
  | "status"
  | "terminal";

export interface Column {
  key: ColumnKey;
  label: string;
  render: (flight: Flight) => React.ReactNode;
}
