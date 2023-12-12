export const SidebarList = () => {
  return (
    <>
      <ul className="nav nav-pills flex-column mb-auto">
        {links.map(({ content, id }) => (
          <ListItem key={id}>{content}</ListItem>
        ))}
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <svg className="bi pe-none me-2" height={16} width={16}>
              <use xlinkHref="#home" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            <svg className="bi pe-none me-2" height={16} width={16}>
              <use xlinkHref="#speedometer2" />
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            <svg className="bi pe-none me-2" height={16} width={16}>
              <use xlinkHref="#table" />
            </svg>
            Orders
          </a>
        </li>
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            <svg className="bi pe-none me-2" height={16} width={16}>
              <use xlinkHref="#grid" />
            </svg>
            Products
          </a>
        </li>
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            <svg className="bi pe-none me-2" height={16} width={16}>
              <use xlinkHref="#people-circle" />
            </svg>
            Customers
          </a>
        </li>
      </ul>
    </>
  );
};

const links = [
  {
    content: (
      <>
        <svg className="bi pe-none me-2" height={16} width={16}>
          <use xlinkHref="#home" />
        </svg>
        Home
      </>
    ),
    id: "home",
  },
  {
    content: (
      <>
        <svg className="bi pe-none me-2" height={16} width={16}>
          <use xlinkHref="#speedometer2" />
        </svg>
        Dashboard
      </>
    ),
    id: "dashboard",
  },
  {
    content: (
      <>
        <svg className="bi pe-none me-2" height={16} width={16}>
          <use xlinkHref="#table" />
        </svg>
        Orders
      </>
    ),
    id: "orders",
  },
  {
    content: (
      <>
        <svg className="bi pe-none me-2" height={16} width={16}>
          <use xlinkHref="#grid" />
        </svg>
        Products
      </>
    ),
    id: "products",
  },
  {
    content: (
      <>
        <svg className="bi pe-none me-2" height={16} width={16}>
          <use xlinkHref="#people-circle" />
        </svg>
        Customers
      </>
    ),
    id: "customers",
  },
];

const ListItem = ({ isActive, children }) => {
  return (
    <>
      {isActive ? (
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            {children}
          </a>
        </li>
      ) : (
        <li>
          <a className="nav-link link-body-emphasis" href="#">
            {children}
          </a>
        </li>
      )}
    </>
  );
};