import { dashboards } from "./dashboards";
import { groups } from "./groups";
import { users } from "./users";

export const data = [
  {
    columns: [
      { field: "id" },
      { field: "firstName" },
      { field: "lastName" },
      { field: "email" },
    ],
    name: "Users",
    id: "users",
    rows: users,
  },
  {
    columns: [
      { field: "id" },
      { field: "firstName" },
      { field: "lastName" },
      { field: "email" },
    ],
    name: "Groups",
    id: "groups",
    rows: groups,
  },
  {
    columns: [
      { field: "id" },
      { field: "firstName" },
      { field: "lastName" },
      { field: "email" },
    ],
    name: "Dashboards",
    id: "dashboards",
    rows: dashboards,
  },
];
