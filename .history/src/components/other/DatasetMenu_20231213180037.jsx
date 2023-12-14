import { Fragment } from "react";

export const DatasetMenu = ({
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
            <li
              onTransitionEnd={(e) => console.log(e)}
              onClick={() => onDatasetItemClick(id)}
              className="nav-item"
            >
              <a
                onClick={preventNavigation}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                {displayName}
              </a>
            </li>
          ) : (
            <li
              onTransitionEnd={(e) => console.log(e)}
              onClick={() => onDatasetItemClick(id)}
            >
              <a
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
