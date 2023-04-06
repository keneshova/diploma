import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return(
    <nav className="Nav">
      <ul>
       <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/about">About</NavLink></li>
       <li><NavLink to="/contact">Contact</NavLink></li>
       <li><NavLink to="/delivery">Delivery</NavLink></li>
     
      </ul>


    </nav>

  );
}
