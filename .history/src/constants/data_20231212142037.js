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
  { name: "Groups", id: "groups", rows: groups },
  { name: "Dashboards", id: "dashboards", rows: dashboards },
];
