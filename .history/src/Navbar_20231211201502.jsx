import useResizeObserver from "use-resize-observer";
import { useState } from "react";

export const Navbar = () => {
  const { height = 1, width = 1, ref } = useResizeObserver();

  const [open, setOpen] = useState(false);

  const onTogglerClick = () => setOpen((boolean) => !boolean);

  const getOffcanvasClassName = () => {
    const classList = ["navbar-collapse", "offcanvas-collapse"];

    if (open) classList.push("open");

    return classList.join(" ");
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark"
      aria-label="Main navigation"
      ref={ref}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Offcanvas navbar
        </a>
        <button
          className="navbar-toggler p-0 border-0"
          aria-label="Toggle navigation"
          onClick={onTogglerClick}
          id="navbarSideCollapse"
          type="button"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={getOffcanvasClassName()}
          style={{ top: `${height + 16}px` }}
          id="navbarsExampleDefault"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Notifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Switch account
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                href="#"
              >
                Settings
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              placeholder="Search"
              aria-label="Search"
              type="search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
