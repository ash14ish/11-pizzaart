import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes["nav-bar"]}>
      <ul>
        <li>
          <NavLink
            to="bestsellers"
            className={navData => (navData.isActive ? classes.active : "")}
          >
            BESTSELLERS
          </NavLink>
        </li>

        <li>
          <NavLink
            to="new-launches"
            className={navData => (navData.isActive ? classes.active : "")}
          >
            NEW LAUNCHES
          </NavLink>
        </li>

        <li>
          <NavLink
            to="paratha-pizza"
            className={navData => (navData.isActive ? classes.active : "")}
          >
            PARATHA PIZZA
          </NavLink>
        </li>

        <li>
          <NavLink
            to="veg-pizza"
            className={navData => (navData.isActive ? classes.active : "")}
          >
            VEG PIZZA
          </NavLink>
        </li>

        <li>
          <NavLink
            to="non-veg-pizza"
            className={navData => (navData.isActive ? classes.active : "")}
          >
            NON-VEG PIZZA
          </NavLink>
        </li>

        <li>
          <NavLink
            to="beverages"
            className={navData => (navData.isActive ? classes.active : "")}
          >
            BEVERAGES
          </NavLink>
        </li>

        <li>
          <NavLink
            to="dessert"
            className={navData => (navData.isActive ? classes.active : "")}
          >
            DESSERT
          </NavLink>
        </li>

        <li>
          <NavLink
            to="meal-for-4"
            className={navData => (navData.isActive ? classes.active : "")}
          >
            MEAL FOR 4
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
