import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../img/logo.svg";

const Navbar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  return (
    <div className="nav-container">
      <div className="nav-content">
      <NavLink className="nav-logo" to="/">
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
      {isHomePage ? (
        <NavLink className="nav-link" to="/form">Počasí podle lokality</NavLink>
      ) : (
        <NavLink className="nav-link" to="/">Hlavní stránka</NavLink>
      )}
      </div>
    </div>
  );
};

export default Navbar;
