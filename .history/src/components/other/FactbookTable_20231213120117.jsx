import { useCallback, Fragment, useState } from "react";

import { datasets } from "../../constants/datasets";
import { GridExample } from "./GridExample";

// do bare minimum
// ensure reactive values in body of component maintain referential equality
// keep all business logic localized to this one "root" file for now, and then all props passed will have referential equality (when applicable) (safe props)
// therefore, inherited components will be memoize-able

export const FactbookTable = () => {
  const [rowsOfData, setRowsOfData] = useState([]);

  const [activeDatasetId, setActiveDatasetId] = useState(datasets[0].id);

  const activeDataset = datasets.find(({ id }) => id === activeDatasetId);

  const gridRowsLocation = activeDataset.location;

  const onDatasetItemClick = useCallback((id) => setActiveDatasetId(id), []);

  const onGridReady = useCallback(() => {
    fetch(gridRowsLocation)
      .then((resp) => resp.json())
      .then((data) => setRowsOfData(data));
  }, [gridRowsLocation]);

  return (
    <div>
      <DatasetMenu
        onDatasetItemClick={onDatasetItemClick}
        activeDatasetId={activeDatasetId}
        datasets={datasets}
      ></DatasetMenu>
      <GridExample onGridReady={onGridReady}></GridExample>
    </div>
  );
};

const DatasetMenu = ({ onDatasetItemClick, activeDatasetId, datasets }) => {
  const preventNavigation = (e) => e.preventDefault();

  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {datasets.map(({ displayName, id }) => (
        <Fragment key={id}>
          {id === activeDatasetId ? (
            <li onClick={() => onDatasetItemClick(id)} className="nav-item">
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
            <li onClick={() => onDatasetItemClick(id)}>
              <a
                className="nav-link link-body-emphasis"
                onClick={preventNavigation}
                href="#"
              >
                {displayName}
              </a>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};
