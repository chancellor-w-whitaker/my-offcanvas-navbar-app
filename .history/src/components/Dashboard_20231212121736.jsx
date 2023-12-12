import { users } from "../data/users";

console.log(users);
const domains = users.map(({ domain }, index) => ({ id: index + 1, domain }));
const companies = users.map(({ company: { name } }, index) => ({
  id: index + 1,
  name,
}));
console.log(domains);

export const Dashboard = () => {
  return <></>;
};
