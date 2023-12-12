import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { forwardRef } from "react";

export const Grid = forwardRef({ theme = "quartz", height = 500, ...rest }) => {
  return (
    // Container with theme & dimensions
    <div className={`ag-theme-${theme}`} style={{ height }}>
      {/* The AG Grid component */}
      <AgGridReact {...rest} />
    </div>
  );
};
