import { GridExample } from "./GridExample";

const data = [
  {
    location: "data/factbook/fall-enrollment.json",
    displayName: "Fall Enrollment",
  },
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
