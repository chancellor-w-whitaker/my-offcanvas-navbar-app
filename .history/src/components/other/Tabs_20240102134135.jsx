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
      className={[
        "nav nav-pills flex-column flex-nowrap mb-auto overflow-y-scroll",
        className,
      ].join(className.length > 0 ? " " : "")}
      style={{ height: 200 }}
    >
      {list.map(({ displayName, id }) => (
        <Fragment key={id}>
          {id === activeTabID ? (
            <li
              style={{ insetInlineStart: 0 }}
              onClick={() => onTabClick(id)}
              className="nav-item"
            >
              <a
                onTransitionEnd={(e) =>
                  typeof onTabTransitionEnd === "function" &&
                  onTabTransitionEnd(e, id)
                }
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
                onTransitionEnd={(e) =>
                  typeof onTabTransitionEnd === "function" &&
                  onTabTransitionEnd(e, id)
                }
                className="nav-link link-body-emphasis"
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
