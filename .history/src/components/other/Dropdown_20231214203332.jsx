import { memo } from "react";

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

const DropdownItem = memo(({ children, checked, onClick, field }) => {
  return (
    <label className="list-group-item d-flex gap-2">
      <input
        className="form-check-input flex-shrink-0"
        onChange={onClick}
        checked={checked}
        type="checkbox"
        value={field}
      />
      <span>{children}</span>
    </label>
  );
});

DropdownItem.displayName = "DropdownItem";
