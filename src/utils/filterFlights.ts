import type { FlightStatusFilterType } from "../model/filters";
import type { Flight } from "../model/flight";

export const filterFlights = (
  flights: Flight[],
  status: FlightStatusFilterType
) => {
  if (status === "all") return flights;
  return flights.filter((flight) => flight.status === status);
};
