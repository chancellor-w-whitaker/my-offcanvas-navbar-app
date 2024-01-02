import { getEachColumnTypeOccurrences } from "./getEachColumnTypeOccurrences";
import { findMostCommonType } from "./findMostCommonType";
import { toTitleCase } from "./toTitleCase";

export const initializeColumnLogic = (rowData) => {
  const eachColTypeOccurrences = getEachColumnTypeOccurrences(rowData);

  const typedColumnDefs = Object.entries(eachColTypeOccurrences).map(
    ([field, typeOccurrences]) => {
      const type = findMostCommonType(typeOccurrences);

      return type === "number"
        ? {
            valueFormatter: ({ value }) => Math.round(value).toLocaleString(),
            headerName: toTitleCase(field),
            type: "numericColumn",
            field,
          }
        : { headerName: toTitleCase(field), field };
    }
  );

  // ! need to filter out pivotColumn
  const nonNumericColumnDefs = typedColumnDefs.filter(
    (object) => !("type" in object)
  );

  const numericColumnDefs = typedColumnDefs.filter(
    (object) => "type" in object
  );

  // ! need to find pivotValues from rowData and then generate pivotColumnDefs

  // ! should add pivotColumnDefs instead of numericColumnDefs
  const sortedColumnDefs = [...nonNumericColumnDefs, ...numericColumnDefs];

  const allSummaryColumns = nonNumericColumnDefs.map(({ field }) => field);

  const allMeasures = numericColumnDefs.map(({ field }) => ({
    displayName: toTitleCase(field),
    id: field,
  }));

  const initialSummaryColumns = new Set([allSummaryColumns[0]]);

  return {
    columnDefs: sortedColumnDefs,
    initialSummaryColumns,
    allSummaryColumns,
    allMeasures,
  };
};
