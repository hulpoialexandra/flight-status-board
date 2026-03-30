import type { FlightStatus, Flight } from "./flight";

export type FlightStatusFilterType = "all" | FlightStatus;

export type GroupByType = "none" | keyof Flight;
