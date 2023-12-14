import { Fragment } from "react";

export const DatasetMenu = ({
  onDatasetItemClick,
  activeDatasetId,
  datasets,
}) => {
  const preventNavigation = (e) => e.preventDefault();

  //   const onTransitionEnd = (e) => console.log(e);

  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {datasets.map(({ displayName, id }) => (
        <Fragment key={id}>
          {id === activeDatasetId ? (
            <li
              onClick={() => onDatasetItemClick(id)}
              //   onTransitionEnd={onTransitionEnd}
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
              onClick={() => onDatasetItemClick(id)}
              onTransitionEnd={onTransitionEnd}
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
