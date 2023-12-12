import { AgGridReact } from "ag-grid-react";
import { useEffect, useState } from "react";

import { data } from "../constants/data";
import { Sidebar } from "./Sidebar"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme

const sidebarList = data.map(({ name, id }) => ({ name, id }));

const autoSizeStrategy = { type: "fitGridWidth" };

export const Contained = () => {
  const [activeId, setActiveId] = useState(sidebarList[0].id);

  const activeDataset = data.find(({ id }) => id === activeId);

  const { columns, rows } = activeDataset;

  return (
    <div className="d-flex flex-row gap-3 flex-wrap flex-md-nowrap">
      <Sidebar
        setActiveId={setActiveId}
        activeId={activeId}
        list={sidebarList}
      ></Sidebar>
      <div className="ag-theme-quartz flex-fill" style={{ height: 500 }}>
        <AgGridReact
          autoSizeStrategy={autoSizeStrategy}
          columnDefs={columns}
          rowData={rows}
          key={activeId}
        ></AgGridReact>
      </div>
    </div>
  );
};
