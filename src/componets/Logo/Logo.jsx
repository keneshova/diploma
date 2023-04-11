import "./Logo.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export default function Logo(){
  return (
    <div className="Logo">
     <NavLink to="/">
       <img src={logo} alt="Website logo" />
     </NavLink>
    </div>
  );
}