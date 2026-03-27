import type { DataResponseType } from "../api/get-flights";
import type { Flight, FlightStatus } from "../model/flight";

const getStatus = (id: number): FlightStatus => {
  const value = id % 3;
  switch (value) {
    case 0:
      return "on-time";
    case 1:
      return "delayed";
    case 2:
    default:
      return "cancelled";
  }
};

const getGateNumber = (id: number): string => {
  const gateNumber = (id % 20) + 1;
  return gateNumber.toString();
};

export const mapFlights = (data: DataResponseType[]): Flight[] => {
  if (!data.length) return [];
  return data.map(
    (d) =>
      ({
        flightNumber: `FL-${d.id}`,
        destination: d.title,
        status: getStatus(d.id),
        terminal: d.userId.toString(),
        gate: `Gate - ${getGateNumber(d.id)}`,
        time: "",
      } as Flight)
  );
};
