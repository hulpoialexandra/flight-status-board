import { useState } from "react";
import Table from "./table/Table";
import type { FlightStatusFilterType, GroupByType } from "../../model/filters";
import StatusFilter from "./filters/StatusFilter";
import GroupByFilter from "./filters/GroupByFilter";

function FlightBoard() {
  const [status, setStatus] = useState<FlightStatusFilterType>("all");
  const [groupBy, setGroupBy] = useState<GroupByType>("none");

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-4 items-center">
        <StatusFilter status={status} setStatus={setStatus} />
        <GroupByFilter groupBy={groupBy} setGroupBy={setGroupBy} />
      </div>

      <Table groupBy={groupBy} status={status}/>
    </div>
  );
}

export default FlightBoard;
