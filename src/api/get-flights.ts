import type { Flight } from "../model/flight";
import { mapFlights } from "../utils/mapResponseToFlights";

export type DataResponseType = {
  userId: number;
  id: number;
  title: string;
};

export async function fetchFlights(signal?: AbortSignal): Promise<Flight[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    signal,
  });

  if (!res.ok) {
    throw new Error("Failed to fetch flights");
  }

  const resData = await res.json();
  const flights = mapFlights(resData as DataResponseType[]);
  return flights.sort((a, b) => a.time.getTime() - b.time.getTime());
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchFlightsWithFailureSimulation(
  failureRate: number = 0.3,
  signal?: AbortSignal
) {
  await delay(3000);

  if (Math.random() < failureRate) {
    throw new Error("Simulated error");
  }

  return await fetchFlights(signal);
}
