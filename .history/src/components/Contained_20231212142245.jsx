import { AgGridReact } from "ag-grid-react";
import { useState } from "react";

import { data } from "../constants/data";
import { Sidebar } from "./Sidebar";

const sidebarList = data.map(({ name, id }) => ({ name, id }));

export const Contained = () => {
  const [activeId, setActiveId] = useState(sidebarList[0].id);

  const { columns: columnDefs, rows: rowData } = data.find(
    ({ id }) => id === activeId
  );

  return (
    <div className="d-flex flex-row gap-3">
      <Sidebar
        setActiveId={setActiveId}
        activeId={activeId}
        list={sidebarList}
      ></Sidebar>
      <div
        className="ag-theme-quartz flex-fill shadow-sm"
        style={{ height: 500 }}
      >
        <AgGridReact columnDefs={columnDefs} rowData={rowData}></AgGridReact>
      </div>
    </div>
  );
};
