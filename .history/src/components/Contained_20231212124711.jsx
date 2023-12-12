import { dashboards } from "../data/dashboards";
import { SidebarList } from "./SidebarList";
import { groups } from "../data/groups";
import { users } from "../data/users";

console.log(users);

console.log(groups);

console.log(dashboards);

export const Contained = () => {
  return (
    <>
      <SidebarList></SidebarList>
    </>
  );
};
