import { useState } from "react";

export const SidebarList = () => {
  const [activeId, setActiveId] = useState();
  return (
    <>
      <ul className="nav nav-pills flex-column mb-auto">
        {links.map(({ content, id }) => (
          <ListItem isActive={id === "home"} key={id}>
            {content}
          </ListItem>
        ))}
      </ul>
    </>
  );
};

const links = [
  {
    content: (
      <div className="d-flex flex-row gap-2 align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-people"
          fill="currentColor"
          viewBox="0 0 16 16"
          height={16}
          width={16}
        >
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
        </svg>
        Users
      </div>
    ),
    id: "users",
  },
  {
    content: (
      <div className="d-flex flex-row gap-2 align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-collection"
          fill="currentColor"
          viewBox="0 0 16 16"
          height={16}
          width={16}
        >
          <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5z" />
        </svg>
        Groups
      </div>
    ),
    id: "groups",
  },
  {
    content: (
      <div className="d-flex flex-row gap-2 align-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi bi-speedometer"
          fill="currentColor"
          viewBox="0 0 16 16"
          height={16}
          width={16}
        >
          <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
          <path
            d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z"
            fillRule="evenodd"
          />
        </svg>
        Dashboards
      </div>
    ),
    id: "dashboard",
  },
];

const ListItem = ({ isActive, children }) => {
  return (
    <>
      {isActive ? (
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            {children}
          </a>
        </li>
      ) : (
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            {children}
          </a>
        </li>
      )}
    </>
  );
};
