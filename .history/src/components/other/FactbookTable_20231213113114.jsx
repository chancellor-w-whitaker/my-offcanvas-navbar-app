import { Fragment, useState } from "react";

import { datasets } from "../../constants/datasets";
import { GridExample } from "./GridExample";

export const FactbookTable = () => {
  const [activeDatasetId, setActiveDatasetId] = useState(datasets[0].id);

  const activeDataset = datasets.find(({ id }) => id === activeDatasetId);

  return (
    <div>
      <ul className="nav nav-pills flex-column mb-auto">
        {datasets.map(({ displayName, id }) => (
          <Fragment key={id}>
            {id === activeDatasetId ? (
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            ) : (
              <li>
                <a className="nav-link link-body-emphasis" href="#">
                  Dashboard
                </a>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
      <GridExample></GridExample>
    </div>
  );
};
