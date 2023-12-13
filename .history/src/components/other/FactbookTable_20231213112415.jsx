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
            <svg className="bi pe-none me-2" height={16} width={16}>
              <use xlinkHref="#home" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            <svg className="bi pe-none me-2" height={16} width={16}>
              <use xlinkHref="#speedometer2" />
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            <svg className="bi pe-none me-2" height={16} width={16}>
              <use xlinkHref="#table" />
            </svg>
            Orders
          </a>
        </li>
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            <svg className="bi pe-none me-2" height={16} width={16}>
              <use xlinkHref="#grid" />
            </svg>
            Products
          </a>
        </li>
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            <svg className="bi pe-none me-2" height={16} width={16}>
              <use xlinkHref="#people-circle" />
            </svg>
            Customers
          </a>
        </li>
      </ul>
      <GridExample></GridExample>
    </div>
  );
};
