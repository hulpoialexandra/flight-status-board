import type { Column } from "../../../model/table";
import FlightNumberColumn from "./columns/FlightNumberColumn";
import DestinationColumn from "./columns/DestinationColumn";
import DepartureTimeColumn from "./columns/DepartureTimeColumn";
import GateColumn from "./columns/GateColumn";
import StatusColumn from "./columns/StatusColumn";
import TerminalColumn from "./columns/TerminalColumn";

export const ALL_COLUMNS: Column[] = [
  {
    key: "flight",
    label: "Flight",
    render: (flight) => <FlightNumberColumn value={flight.flightNumber} />,
  },
  {
    key: "destination",
    label: "Destination",
    render: (flight) => <DestinationColumn value={flight.destination} />,
  },
  {
    key: "time",
    label: "Time",
    render: (flight) => (
      <DepartureTimeColumn
        value={flight.time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      />
    ),
  },
  {
    key: "gate",
    label: "Gate",
    render: (flight) => <GateColumn value={flight.gate} />,
  },
  {
    key: "status",
    label: "Status",
    render: (flight) => <StatusColumn value={flight.status} />,
  },
  {
    key: "terminal",
    label: "Terminal",
    render: (flight) => <TerminalColumn value={flight.terminal} />,
  },
];
