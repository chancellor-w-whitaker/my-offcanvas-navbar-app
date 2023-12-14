import { Fragment } from "react";

export const DatasetTabs = ({
  onTabBgTransitionEnd,
  onDatasetItemClick,
  activeDatasetId,
  datasets,
}) => {
  const preventNavigation = (e) => e.preventDefault();

  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {datasets.map(({ displayName, id }) => (
        <Fragment key={id}>
          {id === activeDatasetId ? (
            <li onClick={() => onDatasetItemClick(id)} className="nav-item">
              <a
                onTransitionEnd={(e) => onTabBgTransitionEnd(e, id)}
                onClick={preventNavigation}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                {displayName}
              </a>
            </li>
          ) : (
            <li onClick={() => onDatasetItemClick(id)}>
              <a
                onTransitionEnd={(e) => onTabBgTransitionEnd(e, id)}
                className="nav-link link-body-emphasis"
                onClick={preventNavigation}
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
