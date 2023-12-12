export const SearchInput = ({ setValue, value }) => {
    const onChange =e=>setValue(e.target.value)
  return (
    <input
      aria-label="type to filter... example"
      placeholder="Type to filter..."
      className="form-control"
      type="search"
      value={value}
      onChange={}
    />
  );
};
