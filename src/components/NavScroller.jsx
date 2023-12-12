export const NavScroller = () => {
  return (
    <div className="nav-scroller bg-body shadow-sm">
      <nav aria-label="Secondary navigation" className="nav">
        <a className="nav-link active" aria-current="page" href="#">
          Dashboard
        </a>
        <a className="nav-link" href="#">
          Friends
          <span className="badge text-bg-light rounded-pill align-text-bottom">
            27
          </span>
        </a>
        <a className="nav-link" href="#">
          Explore
        </a>
        <a className="nav-link" href="#">
          Suggestions
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
        <a className="nav-link" href="#">
          Link
        </a>
      </nav>
    </div>
  );
};
