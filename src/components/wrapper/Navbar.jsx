import useResizeObserver from "use-resize-observer";
import { useEffect, useState } from "react";

export const Navbar = ({ title = "Offcanvas navbar" }) => {
  const { height = 56, ref } = useResizeObserver();

  const [open, setOpen] = useState(false);

  const onTogglerClick = () => setOpen((boolean) => !boolean);

  const getOffcanvasClassName = () => {
    const classList = ["navbar-collapse", "offcanvas-collapse"];

    if (open) classList.push("open");

    return classList.join(" ");
  };

  const heightPx = `${height}px`;

  useEffect(() => {
    document.body.style.paddingTop = heightPx;
  }, [heightPx]);

  return (
    <div className="fixed-top shadow" ref={ref}>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Main navigation"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {title}
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
            id="navbarsExampleDefault"
            style={{ top: heightPx }}
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center text-lg-center">
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
    </div>
  );
};
