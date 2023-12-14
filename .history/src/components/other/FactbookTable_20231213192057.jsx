import { useCallback, useState, useMemo } from "react";

import { datasets } from "../../constants/datasets";
import { GridExample } from "./GridExample";
import { DatasetTabs } from "./DatasetTabs";

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

const initialActiveTabID = datasets[0].id;

export const FactbookTable = () => {
  const [fetchedRows, setFetchedRows] = useState([]);

  const [activeTabID, setActiveTabID] = useState(initialActiveTabID);

  const activeDataset = datasets.find(({ id }) => id === activeTabID);

  const fetchUrl = activeDataset.location;

  const gridColumns = useMemo(() => {
    const firstRow =
      Array.isArray(fetchedRows) && fetchedRows.length > 0
        ? fetchedRows[0]
        : {};

    return Object.keys(firstRow).map((field) => ({ field }));
  }, [fetchedRows]);

  const onTabClick = useCallback((id) => setActiveTabID(id), []);

  const onTabTransitionEnd = useCallback(
    ({ propertyName }, tabID) => {
      const bgTransOccurred = propertyName === "background-color";

      const isNextDatasetID = tabID === activeTabID;

      if (bgTransOccurred && isNextDatasetID) {
        fetch(fetchUrl)
          .then((resp) => resp.json())
          .then((data) => setFetchedRows(data));
      }
    },
    [activeTabID, fetchUrl]
  );

  return (
    <>
      <DatasetTabs
        onTabTransitionEnd={onTabTransitionEnd}
        activeTabID={activeTabID}
        onTabClick={onTabClick}
        datasets={datasets}
      ></DatasetTabs>
      <GridExample columnDefs={gridColumns} rowData={fetchedRows}></GridExample>
    </>
  );
};
