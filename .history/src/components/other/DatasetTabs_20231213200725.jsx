import { Fragment } from "react";

export const Tabs = ({
  onTabTransitionEnd,
  activeTabID,
  onTabClick,
  datasets,
}) => {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {datasets.map(({ displayName, id }) => (
        <Fragment key={id}>
          {id === activeTabID ? (
            <li onClick={() => onTabClick(id)} className="nav-item">
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
                onTransitionEnd={(e) => onTabTransitionEnd(e, id)}
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
