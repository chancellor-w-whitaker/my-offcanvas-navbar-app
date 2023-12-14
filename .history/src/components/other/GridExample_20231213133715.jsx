import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { memo } from "react";

export const GridExample = memo((props) => {
  return (
    // Container with theme & dimensions
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      {/* The AG Grid component */}
      <AgGridReact {...props} />
    </div>
  );
});
