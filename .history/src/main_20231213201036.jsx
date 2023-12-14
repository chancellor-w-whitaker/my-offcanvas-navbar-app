// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import React from "react";

import { SummaryTable } from "./components/other/SummaryTable";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App>
      <SummaryTable></SummaryTable>
    </App>
  </React.StrictMode>
);
