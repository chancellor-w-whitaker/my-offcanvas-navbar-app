import { dashboards } from "./dashboards";
import { groups } from "./groups";
import { users } from "./users";

export const data = [
  { name: "Users", id: "users", rows: users },
  { name: "Groups", id: "groups", rows: groups },
  { name: "Dashboards", id: "dashboards", rows: dashboards },
];
