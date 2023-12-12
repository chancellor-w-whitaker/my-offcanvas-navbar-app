import { users } from "../data/users";

console.log(users);
const domains = users.map(({ domain }, index) => ({ id: index + 1, domain }));
const companies = users.map(({ company: { name } }, index) => ({
  id: index + 1,
  name,
}));
const dashboards = [...new Set(domains.map(({ domain }) => domain))].map(
  (domain, index) => ({
    id: index + 1,
    domain,
  })
);
const groups = [...new Set(companies.map(({ name }) => name))].map(
  (name, index) => ({ id: index + 1, name })
);
console.log(dashboards);
console.log(groups);

export const Dashboard = () => {
  return <></>;
};
