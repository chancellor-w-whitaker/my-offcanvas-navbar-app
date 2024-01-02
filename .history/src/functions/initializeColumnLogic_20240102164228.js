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

  const strColumnDefs = typedColumnDefs.filter((object) => !("type" in object));

  const numColumnDefs = typedColumnDefs.filter((object) => "type" in object);

  const sortedColumnDefs = [...strColumnDefs, ...numColumnDefs];

  const allSummaryColumns = strColumnDefs.map(({ field }) => field);

  const allMeasures = numColumnDefs.map(({ field }) => ({
    displayName: toTitleCase(field),
    id: field,
  }));

  const initDropdownState = new Set([allSummaryColumns[0]]);

  return {
    initialDropdownState: initDropdownState,
    allSummaryColumns: allSummaryColumns,
    columnDefs: sortedColumnDefs,
    allMeasures: allMeasures,
  };
};
