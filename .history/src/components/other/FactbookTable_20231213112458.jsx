import { useState } from "react";

import { datasets } from "../../constants/datasets";
import { GridExample } from "./GridExample";

export const FactbookTable = () => {
  const [activeDatasetId, setActiveDatasetId] = useState(datasets[0].id);

  const activeDataset = datasets.find(({ id }) => id === activeDatasetId);

  return (
    <div>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            Dashboard
          </a>
        </li>
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            Orders
          </a>
        </li>
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            Products
          </a>
        </li>
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            Customers
          </a>
        </li>
      </ul>
      <GridExample></GridExample>
    </div>
  );
};
