export const fetchData = (location, stateSetter) => {
  fetch(location)
    .then((resp) => resp.json())
    .then((data) => stateSetter(data));
};
