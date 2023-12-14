import { useCallback, useState, useMemo, useRef } from "react";

import { datasets } from "../../constants/datasets";
import { Tabs } from "./Tabs";
import { Grid } from "./Grid";

const initActiveTabID = datasets[0].id;

const initFetchLocation = datasets.find(
  ({ id }) => id === initActiveTabID
).location;

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

export const SummaryTable = () => {
  const gridRef = useRef();

  const [rowData, setRowData] = useState([]);

  const columnDefs = useMemo(() => {
    return Object.keys(
      Array.isArray(rowData) && rowData.length > 0 ? rowData[0] : {}
    ).map((field) => ({ field }));
  }, [rowData]);

  const [activeTabID, setActiveTabID] = useState(initActiveTabID);

  const fetchLocation = datasets.find(({ id }) => id === activeTabID).location;

  const onTabTransitionEnd = useCallback(
    ({ propertyName }, tabID) => {
      const [bgTransOccurred, isNextDatasetTab] = [
        propertyName === "background-color",
        tabID === activeTabID,
      ];

      bgTransOccurred &&
        isNextDatasetTab &&
        fetch(fetchLocation)
          .then((resp) => resp.json())
          .then((data) => setRowData(data));
    },
    [activeTabID, fetchLocation]
  );

  const onTabClick = useCallback((id) => setActiveTabID(id), []);

  const onGridReady = useCallback(() => {
    fetch(initFetchLocation)
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  return (
    <>
      <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
        <Tabs
          onTabTransitionEnd={onTabTransitionEnd}
          activeTabID={activeTabID}
          onTabClick={onTabClick}
          className="flex-fill"
          list={datasets}
        ></Tabs>
        <div className="ag-theme-quartz w-100" style={{ height: 500 }}>
          <Grid
            onGridReady={onGridReady}
            columnDefs={columnDefs}
            rowData={rowData}
            ref={gridRef}
          ></Grid>
        </div>
      </div>
    </>
  );
};
