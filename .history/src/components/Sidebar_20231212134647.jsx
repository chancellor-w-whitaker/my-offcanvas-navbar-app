import { useState } from "react";

import { data } from "../constants/data";

const list = data.map(({ name, id }) => ({ name, id }));

export const Sidebar = () => {
  const [activeId, setActiveId] = useState(list[0].id);

  const updateActiveId = (id) => setActiveId(id);

  const preventNavigation = (e) => e.preventDefault();

  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {list.map(({ name, id }) => {
        const onListItemClick = () => updateActiveId(id);

        return (
          <>
            {id === activeId ? (
              <li onClick={onListItemClick} className="nav-item" key={id}>
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
              <li onClick={onListItemClick} key={id}>
                <a
                  className="nav-link link-body-emphasis"
                  onClick={preventNavigation}
                  href="#"
                >
                  {name}
                </a>
              </li>
            )}
          </>
        );
      })}
    </ul>
  );
};
