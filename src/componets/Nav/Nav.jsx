import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return(
    <nav className="Nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/delivery">Delivery</NavLink>


    </nav>

  );
}
