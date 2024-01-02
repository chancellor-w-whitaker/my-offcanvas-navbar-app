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

  const nonNumericColumnDefs = typedColumnDefs.filter(
    (object) => !("type" in object)
  );

  const numericColDefs = typedColumnDefs.filter((object) => "type" in object);

  const sortedColDefs = [...nonNumericColumnDefs, ...numericColDefs];

  const allSummaryCols = nonNumericColumnDefs.map(({ field }) => field);

  const allMeasures = numericColDefs.map(({ field }) => ({
    displayName: toTitleCase(field),
    id: field,
  }));

  const initSummaryCols = new Set([allSummaryCols[0]]);

  return {
    initialDropdownState: initSummaryCols,
    allSummaryColumns: allSummaryCols,
    columnDefs: sortedColDefs,
    allMeasures: allMeasures,
  };
};
