import { useState } from "react";

import { data } from "../constants/data";

const list = data.map(({ name, id }) => ({ name, id }));

export const Sidebar = () => {
  const [activeId, setActiveId] = useState(list[0].id);

  const updateActiveId = (id) => setActiveId(id);

  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {list.map(({ content, id }) =>
        id === activeId ? (
          <li onClick={() => updateActiveId(id)} className="nav-item" key={id}>
            <a className="nav-link active" aria-current="page" href="#">
              {content}
            </a>
          </li>
        ) : (
          <li onClick={() => updateActiveId(id)} key={id}>
            <a className="nav-link link-body-emphasis" href="#">
              {content}
            </a>
          </li>
        )
      )}
    </ul>
  );
};
