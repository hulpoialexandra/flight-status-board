import React from "react";
import type { GroupByType } from "../../../model/filters";
import FilterButton from "./FilterButton";

const GROUP_BY: GroupByType[] = ["none", "terminal"];

interface GroupByFilterProps {
  groupBy: GroupByType;
  setGroupBy: (groupBy: GroupByType) => void;
}

function GroupByFilter({ groupBy, setGroupBy }: GroupByFilterProps) {
  return (
    <div className="flex gap-2 ml-auto">
      {GROUP_BY.map((g) => (
        <FilterButton
          key={g}
          label={g === "none" ? "No Group" : `Group by ${g}`}
          selected={groupBy === g}
          onClick={() => setGroupBy(g)}
          selectedColor="bg-green-500"
        />
      ))}
    </div>
  );
}

export default React.memo(GroupByFilter);
