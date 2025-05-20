import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import clsx from "clsx";

export default function AppBar() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <header className={css.header}>
      <nav>
        <ul>
          <li className={css["navigation-item"]}>
            <NavLink to="/" className={buildLinkClass}>
              Home
            </NavLink>
          </li>
          <li className={css["navigation-item"]}>
            <NavLink to="/movies" className={buildLinkClass}>
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
