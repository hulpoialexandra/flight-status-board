import type { Flight } from "../model/flight";

export const compareFlights = (prevFlights: Flight[], newFlights: Flight[]) => {
  if (prevFlights.length !== newFlights.length) return false;

  const map = new Map<string, Flight>();

  for (const flight of prevFlights) {
    map.set(flight.flightNumber, flight);
  }

  for (const flight of newFlights) {
    const matchFlight = map.get(flight.flightNumber);

    if (!matchFlight) return false;

    if (
      matchFlight.destination !== flight.destination ||
      matchFlight.gate !== flight.gate ||
      matchFlight.status !== flight.status ||
      matchFlight.terminal !== flight.terminal ||
      matchFlight.time.getTime() !== flight.time.getTime()
    ) {
      return false;
    }
  }

  return true;
};
