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

  const dropdownOpts = stringCols.map(({ field }) => field);

  const listOfMeasures = numberCols.map(({ field }) => ({
    displayName: field,
    id: field,
  }));

  const initDropdownState = new Set([dropdownOpts[0]]);

  return {
    initialDropdownState: initDropdownState,
    dropdownOptions: dropdownOpts,
    measureOptions: measureOpts,
    columnDefs: sortedColDefs,
  };

  return [sortedColDefs, dropdownOpts, initDropdownState];
};
