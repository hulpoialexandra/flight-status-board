import type { Flight } from "../model/flight";

export const getGroupedFlights = (flights: Flight[], groupBy: keyof Flight) => {
  return flights.reduce((acc: Record<string, Flight[]>, flight) => {
    const key = flight[groupBy] ? flight[groupBy].toString() : "";
    if (!acc[key]) acc[key] = [];
    acc[key].push(flight);
    return acc;
  }, {});
};
