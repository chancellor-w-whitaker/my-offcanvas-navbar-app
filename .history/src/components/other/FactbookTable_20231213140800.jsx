import { useCallback, Fragment, useState, useMemo } from "react";

import { datasets } from "../../constants/datasets";
import { GridExample } from "./GridExample";

// do bare minimum
// ensure reactive values in body of component maintain referential equality
// keep all business logic localized to this one "root" file for now, and then all props passed will have referential equality (when applicable) (safe props)
// therefore, inherited components will be memoize-able
// will there be other instances where it is applicable to repeat this root component inheritance hierarchy (root component return components that are not passed through children)?
//  does passing a component as a child to another component (the children prop) always break referential equality, even when that child component is memoized?
//    if not, may not need to segregate business logic & create other "root component inheritance hierarchies"
// when is it appropriate to define more components anyway? when it feels intuitive
// for now, try passing external constants to components through props anyway (instead of inheriting globally), because this better reflects intent of code and makes components more composable
//  this may be undesirable because it would increase the number of props passed to components
//    alternatively, when child or inherited components are not littered with business logic, a larger number of props may not appear messy

export const FactbookTable = () => {
  const [activeDatasetId, setActiveDatasetId] = useState(datasets[0].id);

  const activeDataset = datasets.find(({ id }) => id === activeDatasetId);

  const fetchUrl = activeDataset.location;

  const rowData = useData(fetchUrl);

  const columnDefs = useMemo(() => {
    const firstRow =
      Array.isArray(rowData) && rowData.length > 0 ? rowData[0] : {};

    return Object.keys(firstRow).map((field) => ({ field }));
  }, [rowData]);

  const onDatasetItemClick = useCallback((id) => setActiveDatasetId(id), []);

  return (
    <>
      <DatasetMenu
        onDatasetItemClick={onDatasetItemClick}
        activeDatasetId={activeDatasetId}
        datasets={datasets}
      ></DatasetMenu>
      <GridExample columnDefs={columnDefs} rowData={rowData}></GridExample>
    </>
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
