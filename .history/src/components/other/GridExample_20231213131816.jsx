import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { useState } from "react";

export const GridExample = (props) => {
  // Row Data: The data to be displayed.
  const [rowData] = useState([
    {
      location: "Cape Canaveral",
      rocket: "Titan-Centaur ",
      mission: "Voyager",
      date: "1977-09-05",
      successful: true,
      company: "NASA",
      price: 86580000,
    },
    {
      location: "Kennedy Space Center",
      mission: "Apollo 13",
      date: "1970-04-11",
      rocket: "Saturn V",
      successful: false,
      company: "NASA",
      price: 3750000,
    },
    {
      location: "Cape Canaveral",
      mission: "Falcon 9",
      date: "2015-12-22",
      rocket: "Falcon 9",
      company: "SpaceX",
      successful: true,
      price: 9750000,
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState([
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" },
  ]);

  return (
    // Container with theme & dimensions
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      {/* The AG Grid component */}
      <AgGridReact columnDefs={colDefs} rowData={rowData} />
    </div>
  );
};
