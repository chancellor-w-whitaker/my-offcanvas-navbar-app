import { getEachColumnTypeOccurrences } from "./getEachColumnTypeOccurrences";
import { findMostCommonType } from "./findMostCommonType";
import { toTitleCase } from "./toTitleCase";

export const initializeColumnLogic = (dataRows, pivotColumn) => {
  const eachColTypeOccurrences = getEachColumnTypeOccurrences(dataRows);

  // ! filters out pivot column
  const typedColumnDefs = Object.entries(eachColTypeOccurrences)
    .map(([field, typeOccurrences]) => {
      const type = findMostCommonType(typeOccurrences);

      return type === "number"
        ? {
            valueFormatter: ({ value }) => Math.round(value).toLocaleString(),
            headerName: toTitleCase(field),
            type: "numericColumn",
            field,
          }
        : { headerName: toTitleCase(field), field };
    })
    .filter(({ field }) => field !== pivotColumn);

  const nonNumericColumnDefs = typedColumnDefs.filter(
    (object) => !("type" in object)
  );

  const numericColumnDefs = typedColumnDefs.filter(
    (object) => "type" in object
  );

  const pivotValuesSet = new Set();

  Array.isArray(dataRows) &&
    dataRows.forEach((row) => pivotValuesSet.add(row[pivotColumn]));

  // ! model of numeric column def found in typedColumnDefs assignment
  const pivotColumnDefs = [...pivotValuesSet].map((field) => ({
    valueFormatter: ({ value }) => Math.round(value).toLocaleString(),
    headerName: toTitleCase(field),
    type: "numericColumn",
    field,
  }));

  const sortedColumnDefs = [...nonNumericColumnDefs, ...pivotColumnDefs];

  const summaryColumnsList = nonNumericColumnDefs.map(({ field }) => field);

  const measuresList = numericColumnDefs.map(({ field }) => ({
    displayName: toTitleCase(field),
    id: field,
  }));

  const initialActiveSummaryColumns = new Set([summaryColumnsList[0]]);

  // ! outside of this file (& hook), for compatibility with groupBy function, for each row, add row[row[pivotColumn]] = row[measure] (make sure to deep copy dataRows to prevent awkward behavior)
  // ! for each row, do you also need to add a 0 for every other pivotValue?
  // ! continue re-naming due to application purpose & requirements changing

  return {
    columnDefs: sortedColumnDefs,
    initialActiveSummaryColumns,
    summaryColumnsList,
    pivotValuesSet,
    measuresList,
  };
};
