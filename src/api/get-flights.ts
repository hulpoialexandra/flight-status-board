import type { Flight } from "../model/flight";
import { mapFlights } from "../utils/mapResponseToFlights";

export type DataResponseType = {
  userId: number;
  id: number;
  title: string;
};

export async function fetchFlights(): Promise<Flight[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch flights");
  }

  const resData = await res.json();
  const flights = mapFlights(resData as DataResponseType[]);
  flights.sort((a, b) => a.time.getTime() - b.time.getTime());
  return flights;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchFlightsWithFailureSimulation(
  failureRate: number = 0.3
) {
  await delay(3000);

  if (Math.random() < failureRate) {
    throw new Error("Simulated error");
  }

  return await fetchFlights();
}
