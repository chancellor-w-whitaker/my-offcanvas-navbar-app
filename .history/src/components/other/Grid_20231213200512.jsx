import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { forwardRef } from "react";

export const Grid = forwardRef((props, ref) => {
  return <AgGridReact ref={ref} {...props}></AgGridReact>;
});

Grid.displayName = "Grid";
