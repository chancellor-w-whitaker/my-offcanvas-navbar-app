import {
  startTransition,
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";

import { initializeColumnLogic } from "../../functions/initializeColumnLogic";
import { toTitleCase } from "../../functions/toTitleCase";
import { fetchData } from "../../functions/fetchData";
import { datasets } from "../../constants/datasets";
import { groupBy } from "../../functions/groupBy";
import { Dropdown } from "./Dropdown";
import { Tabs } from "./Tabs";
import { Grid } from "./Grid";

const initActiveTabID = datasets[0].id;

const initActiveSummaryColumns = new Set(["termDesc"]);

const sizeColumnsToFit = ({ api }) => api.sizeColumnsToFit();

const onGridSizeChanged = ({ clientWidth, api }) => {
  const widthDividedEqually = clientWidth / api.columnModel.columnDefs.length;

  if (widthDividedEqually < 125) {
    api.autoSizeAllColumns();
  } else {
    api.sizeColumnsToFit();
  }
};

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

// do dataRows & columns need ids?
// selected column ids (or fields)
// need a column dropdown component
// remember python melt function
// can chat gpt handle converting it to js, or should you just do it yourself?

export const SummaryTable = () => {
  // ! refs
  const gridRef = useRef();

  // ! state
  const [dataRows, setDataRows] = useState();

  const [activeSummaryColumns, setActiveSummaryColumns] = useState(
    initActiveSummaryColumns
  );

  const [activeDatasetID, setActiveDatasetID] = useState("");

  const [measure, setMeasure] = useState("");

  // ! derived values
  const dataset = datasets.find(({ id }) => id === activeDatasetID);

  const datasetFetchUrl = dataset?.location;

  const pivotColumn = dataset?.pivotColumn;

  const { allSummaryColumns, allMeasures, pivotValues, columnDefs } = useMemo(
    () => initializeColumnLogic(dataRows, pivotColumn),
    [dataRows, pivotColumn]
  );

  const summary = useMemo(
    () =>
      columnDefs.filter(
        ({ field }) => activeSummaryColumns.has(field) || field === measure
      ),
    [columnDefs, activeSummaryColumns, measure]
  );

  const groupedRowData = useMemo(() => {
    const groupByFields = summary
      .filter((def) => !("type" in def))
      .map(({ field }) => field);

    const aggFields = summary
      .filter((def) => "type" in def)
      .map(({ field }) => field);

    return groupBy(dataRows, groupByFields, aggFields);
  }, [dataRows, summary]);

  // ! callbacks
  const onDropdownItemClick = useCallback(
    (e) =>
      startTransition(() =>
        setActiveSummaryColumns((previousState) => {
          const nextState = new Set(previousState);

          nextState.has(e.target.value)
            ? nextState.delete(e.target.value)
            : nextState.add(e.target.value);

          return nextState;
        })
      ),
    []
  );

  const onTabClick = useCallback(
    (id) => startTransition(() => setActiveDatasetID(id)),
    []
  );

  const onTabTransitionEnd = useCallback(
    ({ propertyName }, tabID) => {
      const [bgTransOccurred, isNextDatasetTab] = [
        propertyName === "background-color",
        tabID === activeDatasetID,
      ];

      bgTransOccurred &&
        isNextDatasetTab &&
        fetchData(datasetFetchUrl, setDataRows);
    },
    [activeDatasetID, datasetFetchUrl]
  );

  const onMeasureTabClick = useCallback(
    (id) => startTransition(() => setMeasure(id)),
    []
  );

  // ! effects
  useEffect(() => {
    setActiveDatasetID(initActiveTabID);
  }, []);

  useEffect(() => {
    const allMeasuresIsPopulated =
      Array.isArray(allMeasures) &&
      allMeasures.length > 0 &&
      "id" in allMeasures[0];

    allMeasuresIsPopulated && setMeasure(allMeasures[0].id);
  }, [allMeasures]);

  // console.log(
  //   dataRows?.map((row) => ({
  //     ...row,
  //     [row[pivotColumn]]: row[measure],
  //   }))
  // );

  return (
    <>
      <div className="d-flex flex-wrap flex-lg-nowrap gap-3 align-items-stretch">
        <div className="d-flex flex-row flex-lg-column gap-3 flex-wrap rounded shadow-sm p-3 flex-fill">
          <Tabs
            className="text-nowrap shadow-sm rounded"
            onTabTransitionEnd={onTabTransitionEnd}
            activeTabID={activeDatasetID}
            onTabClick={onTabClick}
            list={datasets}
          ></Tabs>
          <Tabs
            className="text-nowrap shadow-sm rounded"
            onTabClick={onMeasureTabClick}
            // onTabTransitionEnd={onTabTransitionEnd}
            activeTabID={measure}
            list={allMeasures}
          ></Tabs>
          <Dropdown
            onItemClick={onDropdownItemClick}
            fieldFormatter={toTitleCase}
            state={activeSummaryColumns}
            options={allSummaryColumns}
          >
            Columns
          </Dropdown>
          <div className="flex-fill"></div>
        </div>
        <div className="ag-theme-quartz w-100" style={{ minHeight: 500 }}>
          <Grid
            onGridSizeChanged={sizeColumnsToFit}
            onRowDataUpdated={sizeColumnsToFit}
            rowData={groupedRowData}
            columnDefs={summary}
            ref={gridRef}
          ></Grid>
        </div>
      </div>
    </>
  );
};
