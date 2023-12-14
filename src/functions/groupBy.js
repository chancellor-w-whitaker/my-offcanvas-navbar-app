export const groupBy = (rowData, groupByFields, aggFields) => {
  if (!Array.isArray(rowData) || !Array.isArray(groupByFields)) return rowData;

  const groupedRowData = [];

  const legend = {};

  rowData.forEach((row) => {
    const groupByPairs = groupByFields.map((field) => [field, row[field]]);

    const aggPairs = aggFields.map((field) => [field, row[field]]);

    let currentRoot = legend;

    groupByPairs.forEach(([field, value], index) => {
      if (!(value in currentRoot)) {
        currentRoot[value] = {};
        if (index === groupByPairs.length - 1) {
          groupedRowData.push({ reference: currentRoot[value] });
        }
      }

      currentRoot = currentRoot[value];
    });

    groupByPairs.forEach(([field, value]) => (currentRoot[field] = value));

    aggPairs.forEach(([field, value]) => {
      if (!(field in currentRoot)) currentRoot[field] = 0;

      currentRoot[field] += value;
    });
  });

  return groupedRowData.map(({ reference }) => reference);
};
