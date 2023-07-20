import logo from "../logo.svg";
import "../styles/Header.css";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="logo" />
        <nav>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </nav>
        <Link to="/signup">
          <button>Get Started</button>
        </Link>
      </div>
    </>
  );
}

export default Header;
