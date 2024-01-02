import { getEachColumnTypeOccurrences } from "./getEachColumnTypeOccurrences";
import { findMostCommonType } from "./findMostCommonType";
import { toTitleCase } from "./toTitleCase";

export const initializeColumnLogic = (rowData) => {
  const eachColTypeOccurrences = getEachColumnTypeOccurrences(rowData);

  const typedColDefs = Object.entries(eachColTypeOccurrences).map(
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

  const stringCols = typedColDefs.filter((object) => !("type" in object));

  const numberCols = typedColDefs.filter((object) => "type" in object);

  const sortedColDefs = [...stringCols, ...numberCols];

  const allSummaryColumns = stringCols.map(({ field }) => field);

  const allMeasures = numberCols.map(({ field }) => ({
    displayName: toTitleCase(field),
    id: field,
  }));

  const initDropdownState = new Set([allSummaryColumns[0]]);

  return {
    initialDropdownState: initDropdownState,
    allSummaryColumns: allSummaryColumns,
    columnDefs: sortedColDefs,
    allMeasures: allMeasures,
  };
};
