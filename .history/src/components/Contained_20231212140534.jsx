import { useState } from "react";

import { data } from "../constants/data";
import { GridExample } from "./Table";
import { Sidebar } from "./Sidebar";

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
    <>
      <Sidebar
        setActiveId={setActiveId}
        activeId={activeId}
        list={sidebarList}
      ></Sidebar>
      <GridExample></GridExample>
    </>
  );
};
