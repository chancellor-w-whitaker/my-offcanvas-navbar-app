import { users } from "../data/users";

console.log(users);
const domains = users.map(({ domain }, index) => ({ id: index + 1, domain }));
console.log(domains);

export const Dashboard = () => {
  return <></>;
};
