import { NavLink } from "react-router-dom";

const NavBarLink = () => {
  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "nav-link active fw-semibold"
              : "nav-link fw-semibold"
          }
        >
          Hi, Clinton
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "nav-link active fw-semibold"
              : "nav-link fw-semibold"
          }
        >
          Logout
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "nav-link active fw-semibold"
              : "nav-link fw-semibold"
          }
        >
          Login
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive
              ? "nav-link active fw-semibold"
              : "nav-link fw-semibold"
          }
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBarLink;
