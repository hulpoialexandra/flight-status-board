import type { Flight } from "./flight";

export interface Column {
  key: keyof Flight;
  label: string;
  render: (flight: Flight) => React.ReactNode;
}
