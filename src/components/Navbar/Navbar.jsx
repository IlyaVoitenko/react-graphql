import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-around">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 hover:text-blue-800 "
            : "text-white hover:text-slate-600"
        }
      >
        Movies
      </NavLink>
      <NavLink
        to={"/directors"}
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 hover:text-blue-800 "
            : "text-white hover:text-slate-600"
        }
      >
        Directors
      </NavLink>
    </header>
  );
};

export default Navbar;
