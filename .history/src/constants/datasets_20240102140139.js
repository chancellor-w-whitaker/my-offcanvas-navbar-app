export const datasets = [
  {
    location: "data/factbook/fall-enrollment.json",
    displayName: "Fall Enrollment",
    pivotField: "termDesc",
    id: "fall-enrollment",
  },
  {
    location: "data/factbook/spring-enrollment.json",
    displayName: "Spring Enrollment",
    id: "spring-enrollment",
    pivotColumn: "termDesc",
  },
  {
    location: "data/factbook/summer-enrollment.json",
    displayName: "Summer Enrollment",
    id: "summer-enrollment",
    pivotColumn: "termDesc",
  },
  {
    location: "data/factbook/degrees-awarded.json",
    displayName: "Degrees Awarded",
    id: "degrees-awarded",
    pivotColumn: "year",
  },
  {
    location: "data/factbook/retention-rates.json",
    displayName: "Retention Rates",
    pivotColumn: "retention_year",
    id: "retention-rates",
  },
  {
    location: "data/factbook/graduation-rates.json",
    displayName: "Graduation Rates",
    id: "graduation-rates",
    pivotColumn: "",
  },
  {
    location: "data/factbook/credit-hours.json",
    displayName: "Credit Hours",
    id: "credit-hours",
    pivotColumn: "",
  },
];
