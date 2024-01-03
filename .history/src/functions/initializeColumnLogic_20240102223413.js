import { getEachColumnTypeOccurrences } from "./getEachColumnTypeOccurrences";
import { findMostCommonType } from "./findMostCommonType";
import { toTitleCase } from "./toTitleCase";

export const initializeColumnLogic = (rows, pivotColumn) => {
  const eachColTypeOccurrences = getEachColumnTypeOccurrences(rows);

  // * filters out pivot column
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

  // ! need to find pivotValues from rows and then generate pivotColumnDefs

  // ! should add pivotColumnDefs instead of numericColumnDefs
  const sortedColumnDefs = [...nonNumericColumnDefs, ...numericColumnDefs];

  const allSummaryColumns = nonNumericColumnDefs.map(({ field }) => field);

  const allMeasures = numericColumnDefs.map(({ field }) => ({
    displayName: toTitleCase(field),
    id: field,
  }));

  const initialSummaryColumns = new Set([allSummaryColumns[0]]);

  // ! outside of this file (& hook), for compatibility with groupBy function, for each row, add row[row[pivotColumn]] = row[measure] (make sure to deep copy rows to prevent awkward behavior)
  // ! for each row, do you also need to add a 0 for every other pivotValue?
  // ! continue re-naming due to application purpose & requirements changing

  return {
    columnDefs: sortedColumnDefs,
    initialSummaryColumns,
    allSummaryColumns,
    allMeasures,
  };
};
