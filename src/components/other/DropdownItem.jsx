import { memo } from "react";

export const DropdownItem = memo(({ children, checked, onClick, field }) => {
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
