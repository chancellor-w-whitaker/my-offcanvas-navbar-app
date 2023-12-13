import { GridExample } from "./GridExample";

const data = [
  { displayName: "Fall Enrollment", location: "" },
  { displayName: "Spring Enrollment", location: "" },
  { displayName: "Summer Enrollment", location: "" },
  { displayName: "Degrees Awarded", location: "" },
  { displayName: "Retention Rates", location: "" },
  { displayName: "Graduation Rates", location: "" },
  { displayName: "Credit Hours", location: "" },
];

export const FactbookTable = () => {
  return (
    <div>
      <GridExample></GridExample>
    </div>
  );
};
