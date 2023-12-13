import { GridExample } from "./GridExample";

const data = [
  {
    location: "data/factbook/fall-enrollment.json",
    displayName: "Fall Enrollment",
  },
  {
    location: "data/factbook/spring-enrollment.json",
    displayName: "Spring Enrollment",
  },
  {
    location: "data/factbook/summer-enrollment.json",
    displayName: "Summer Enrollment",
  },
  {
    location: "data/factbook/degrees-awarded.json",
    displayName: "Degrees Awarded",
  },
  {
    location: "data/factbook/fall-enrollment.json",
    displayName: "Retention Rates",
  },
  {
    location: "data/factbook/fall-enrollment.json",
    displayName: "Graduation Rates",
  },
  {
    location: "data/factbook/fall-enrollment.json",
    displayName: "Credit Hours",
  },
];

export const FactbookTable = () => {
  return (
    <div>
      <GridExample></GridExample>
    </div>
  );
};
