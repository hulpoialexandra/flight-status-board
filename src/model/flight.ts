export type FlightStatus = "on-time" | "delayed" | "cancelled";

export type Flight = {
  flightNumber: string;
  destination: string;
  status: FlightStatus;
  terminal: string;
  gate: string;
  time: string;
};
