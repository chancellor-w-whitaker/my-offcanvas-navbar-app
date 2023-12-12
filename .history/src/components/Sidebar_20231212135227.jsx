import { Fragment } from "react";

import { data } from "../constants/data";

const list = data.map(({ name, id }) => ({ name, id }));

export const Sidebar = ({ setActiveId, activeId }) => {
  const updateActiveId = (id) => setActiveId(id);

  const preventNavigation = (e) => e.preventDefault();

  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {list.map(({ name, id }) => {
        const onListItemClick = () => updateActiveId(id);

        return (
          <Fragment key={id}>
            {id === activeId ? (
              <li onClick={onListItemClick} className="nav-item">
                <a
                  onClick={preventNavigation}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  {name}
                </a>
              </li>
            ) : (
              <li onClick={onListItemClick}>
                <a
                  className="nav-link link-body-emphasis"
                  onClick={preventNavigation}
                  href="#"
                >
                  {name}
                </a>
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};
