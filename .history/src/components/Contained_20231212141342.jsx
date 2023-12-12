import { useState } from "react";

import { data } from "../constants/data";
import { Sidebar } from "./Sidebar";
import { Grid } from "./Grid";

const sidebarList = data.map(({ name, id }) => ({ name, id }));

const dataWithColumns = data.map(({ rows, ...rest }) => ({
  ...rest,
  columns: Object.keys(rows[0]).map((field) => ({ field })),
  rows,
}));

export const Contained = () => {
  const [activeId, setActiveId] = useState(sidebarList[0].id);

  const { columns: columnDefs, rows: rowData } = dataWithColumns.find(
    ({ id }) => id === activeId
  );

  return (
    <div className="d-flex flex-row gap-3">
      <Sidebar
        setActiveId={setActiveId}
        activeId={activeId}
        list={sidebarList}
      ></Sidebar>
      <Grid columnDefs={columnDefs} rowData={rowData}></Grid>
    </div>
  );
};
