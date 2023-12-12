import { Fragment } from "react";

export const Sidebar = ({ className = "", setActiveId, activeId, list }) => {
  const updateActiveId = (id) => setActiveId(id);

  const preventNavigation = (e) => e.preventDefault();

  const fullClassName = ["nav nav-pills flex-column mb-auto", className].join(
    className.length > 0 ? " " : ""
  );

  return (
    <ul className={fullClassName}>
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
