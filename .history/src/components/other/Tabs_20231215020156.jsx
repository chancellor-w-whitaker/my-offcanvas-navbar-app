import { Fragment } from "react";

export const Tabs = ({
  onTabTransitionEnd,
  className = "",
  activeTabID,
  onTabClick,
  list,
}) => {
  return (
    <ul
      className={["nav nav-pills flex-column mb-auto", className].join(
        className.length > 0 ? " " : ""
      )}
    >
      {list.map(({ displayName, id }) => (
        <Fragment key={id}>
          {id === activeTabID ? (
            <li
              className="nav-item text-center text-lg-start"
              onClick={() => onTabClick(id)}
            >
              <a
                onTransitionEnd={(e) => onTabTransitionEnd(e, id)}
                onClick={(e) => e.preventDefault()}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                {displayName}
              </a>
            </li>
          ) : (
            <li onClick={() => onTabClick(id)}>
              <a
                className="nav-link link-body-emphasis text-center text-lg-start"
                onTransitionEnd={(e) => onTabTransitionEnd(e, id)}
                onClick={(e) => e.preventDefault()}
                href="#"
              >
                {displayName}
              </a>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  );
};
