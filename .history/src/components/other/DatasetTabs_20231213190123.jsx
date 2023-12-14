import { Fragment } from "react";

export const DatasetTabs = ({
  onTabBgTransitionEnd,
  onDatasetItemClick,
  activeDatasetId,
  datasets,
}) => {
  const preventNavigation = (e) => e.preventDefault();

  const onTransitionEnd = (e, id) =>
    e.propertyName === "background-color" &&
    id === activeDatasetId &&
    console.log(e, activeDatasetId);

  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {datasets.map(({ displayName, id }) => (
        <Fragment key={id}>
          {id === activeDatasetId ? (
            <li onClick={() => onDatasetItemClick(id)} className="nav-item">
              <a
                onTransitionEnd={(e) => onTransitionEnd(e, id)}
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
                className="nav-link link-body-emphasis"
                onTransitionEnd={onTransitionEnd}
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
