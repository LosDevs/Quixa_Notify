
import {NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import {BsHouseDoorFill} from "react-icons/bs"



function NavbarAuth() {
  return (
    <nav id='nav'>
      <Link to="/">QuixaNotify</Link>
      <ul id='nav-links'>
        <li>
          <NavLink to="/">
            <BsHouseDoorFill/>
          </NavLink>
        </li>
        <li><NavLink to="/login">
          Login
        </NavLink></li>
        <li>
          <NavLink to="/signup" >
          Cadastre-se
        </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavbarAuth;