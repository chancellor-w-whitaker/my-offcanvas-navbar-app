export const getEachColumnTypeOccurrences = (rowData) => {
  const colTypeOccurrences = {};

  Array.isArray(rowData) &&
    rowData.forEach((row) =>
      Object.entries(row).forEach(([field, value]) => {
        if (!(field in colTypeOccurrences)) colTypeOccurrences[field] = {};

        if (value || value === 0) {
          if (!(typeof value in colTypeOccurrences[field]))
            colTypeOccurrences[field][typeof value] = 0;

          colTypeOccurrences[field][typeof value]++;
        }
      })
    );

  return colTypeOccurrences;
};
