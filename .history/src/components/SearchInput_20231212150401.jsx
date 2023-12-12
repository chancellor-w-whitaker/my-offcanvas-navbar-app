export const SearchInput = ({ setValue, value }) => {
  const onChange = (e) => setValue(e.target.value);
  return (
    <input
      aria-label="type to filter... example"
      placeholder="Type to filter..."
      className="form-control"
      onChange={onChange}
      type="search"
      value={value}
    />
  );
};
