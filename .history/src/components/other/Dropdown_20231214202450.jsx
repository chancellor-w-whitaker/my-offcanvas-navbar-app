import { memo } from "react";

export const DropdownButton = ({ children, name }) => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        data-bs-auto-close="outside"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        type="button"
      >
        {name}
      </button>
      <ul
        className="dropdown-menu py-0 shadow-sm overflow-y-scroll"
        style={{ maxHeight: 200 }}
      >
        <div className="list-group list-group-flush">{children}</div>
      </ul>
    </div>
  );
};

export const DropdownItem = memo(({ children, onClick, checked, field }) => {
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
