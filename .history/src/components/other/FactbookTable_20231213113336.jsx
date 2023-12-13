import { Fragment, useState } from "react";

import { datasets } from "../../constants/datasets";
import { GridExample } from "./GridExample";

export const FactbookTable = () => {
  const [activeDatasetId, setActiveDatasetId] = useState(datasets[0].id);

  const activeDataset = datasets.find(({ id }) => id === activeDatasetId);

  const onDatasetItemClick = (id) => setActiveDatasetId(id);

  const preventNavigation = (e) => e.preventDefault();

  return (
    <div>
      <ul className="nav nav-pills flex-column mb-auto">
        {datasets.map(({ displayName, id }) => (
          <Fragment key={id}>
            {id === activeDatasetId ? (
              <li className="nav-item">
                <a
                  onClick={preventNavigation}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  {displayName}
                </a>
              </li>
            ) : (
              <li>
                <a className="nav-link link-body-emphasis" href="#">
                  {displayName}
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
