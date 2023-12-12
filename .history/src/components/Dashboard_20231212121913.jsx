import { users } from "../data/users";

console.log(users);
const domains = users.map(({ domain }, index) => ({ id: index + 1, domain }));
const companies = users.map(({ company: { name } }, index) => ({
  id: index + 1,
  name,
}));
console.log(new Set(domains.map(({ domain }) => domain)));
console.log(companies);

export const Dashboard = () => {
  return <></>;
};
