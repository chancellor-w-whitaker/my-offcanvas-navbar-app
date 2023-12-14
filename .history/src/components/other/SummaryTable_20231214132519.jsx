import {
  startTransition,
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from "react";

import { getEachColumnTypeOccurrences } from "../../functions/getEachColumnTypeOccurrences";
import { findMostCommonType } from "../../functions/findMostCommonType";
import { toTitleCase } from "../../functions/toTitleCase";
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

  const [rowData, setRowData] = useState();

  const [columnDefs, dropdownOptions, initialDropdownState] = useMemo(() => {
    const eachColTypeOccurrences = getEachColumnTypeOccurrences(rowData);

    const typedColDefs = Object.entries(eachColTypeOccurrences).map(
      ([field, typeOccurrences]) => {
        const type = findMostCommonType(typeOccurrences);

        return type === "number" ? { type: "numericColumn", field } : { field };
      }
    );

    const stringCols = typedColDefs.filter((object) => !("type" in object));

    const numberCols = typedColDefs.filter((object) => "type" in object);

    const sortedColDefs = [...stringCols, ...numberCols];

    const dropdownOpts = stringCols.map(({ field }) => field);

    const initDropdownState = new Set([dropdownOpts[0]]);

    return [sortedColDefs, dropdownOpts, initDropdownState];
  }, [rowData]);

  const onGridReady = useCallback(() => {
    fetch(initFetchLocation)
      .then((resp) => resp.json())
      .then((data) => setRowData(data));
  }, []);

  // do rows & columns need ids?
  // selected column ids (or fields)
  // need a column dropdown component
  // remember python melt function
  // can chat gpt handle converting it to js, or should you just do it yourself?

  const [dropdownState, setDropdownState] = useState(new Set());

  const filteredColumnDefs = useMemo(
    () => columnDefs.filter(({ field }) => dropdownState.has(field)),
    [columnDefs, dropdownState]
  );

  useEffect(() => {
    setDropdownState(initialDropdownState);
  }, [initialDropdownState]);

  const onDropdownItemClick = useCallback((e) => {
    setDropdownState((previousState) => {
      const nextState = new Set(previousState);

      nextState.has(e.target.value)
        ? nextState.delete(e.target.value)
        : nextState.add(e.target.value);

      return nextState;
    });
  }, []);

  const [activeTabID, setActiveTabID] = useState(initActiveTabID);

  const onTabClick = useCallback((id) => {
    startTransition(() => {
      setActiveTabID(id);
    });
  }, []);

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

  return (
    <>
      <div className="d-flex flex-column gap-3">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            data-bs-auto-close="outside"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            type="button"
          >
            Columns
          </button>
          <ul
            className="dropdown-menu py-0 shadow-sm overflow-y-scroll"
            style={{ maxHeight: 200 }}
          >
            <div className="list-group list-group-flush">
              {dropdownOptions.map((field) => (
                <label className="list-group-item d-flex gap-2" key={field}>
                  <input
                    className="form-check-input flex-shrink-0"
                    checked={dropdownState.has(field)}
                    onChange={onDropdownItemClick}
                    type="checkbox"
                    value={field}
                  />
                  <span>{toTitleCase(field)}</span>
                </label>
              ))}
            </div>
          </ul>
        </div>
        <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
          <Tabs
            onTabTransitionEnd={onTabTransitionEnd}
            className="flex-fill text-nowrap"
            activeTabID={activeTabID}
            onTabClick={onTabClick}
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
      </div>
    </>
  );
};
