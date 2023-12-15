export const fetchData = () => {
  fetch(fetchLocation)
    .then((resp) => resp.json())
    .then((data) => setRowData(data));
};
