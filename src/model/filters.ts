import type { FlightStatus } from "./flight";
import type { ColumnKey } from "./table";

export type FlightStatusFilterType = "all" | FlightStatus;

export type GroupByType = "none" | ColumnKey;
