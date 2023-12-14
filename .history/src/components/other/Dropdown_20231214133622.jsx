export const Dropdown = ({
  fieldFormatter,
  onItemClick,
  options,
  state,
  name,
}) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        data-bs-auto-close="outside"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        type="button"
      >
        Columns
      </button>
      <ul
        className="dropdown-menu py-0 shadow-sm overflow-y-scroll"
        style={{ maxHeight: 200 }}
      >
        <div className="list-group list-group-flush">
          {options.map((field) => (
            <label className="list-group-item d-flex gap-2" key={field}>
              <input
                className="form-check-input flex-shrink-0"
                checked={state.has(field)}
                onChange={onItemClick}
                type="checkbox"
                value={field}
              />
              <span>
                {typeof fieldFormatter === "function"
                  ? fieldFormatter(field)
                  : field}
              </span>
            </label>
          ))}
        </div>
      </ul>
    </div>
  );
};
