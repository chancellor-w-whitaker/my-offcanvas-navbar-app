import { DropdownItem } from "./DropdownItem";

export const Dropdown = ({
  fieldFormatter,
  onItemClick,
  children,
  options,
  state,
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
        {children}
      </button>
      <ul
        className="dropdown-menu py-0 shadow-sm overflow-y-scroll"
        style={{ maxHeight: 200 }}
      >
        <div className="list-group list-group-flush">
          {options.map((field) => (
            <DropdownItem
              checked={state.has(field)}
              onClick={onItemClick}
              field={field}
              key={field}
            >
              {typeof fieldFormatter === "function"
                ? fieldFormatter(field)
                : field}
            </DropdownItem>
          ))}
        </div>
      </ul>
    </div>
  );
};
