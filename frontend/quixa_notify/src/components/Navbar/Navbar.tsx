import { useContext } from "react";
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; 
import { useNavigate } from "react-router-dom";

import './Navbar.css';

function NavbarAuth() {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    logout();
    navigate('/login'); 
  }

  return (
    <nav id='nav'>
      <Link to="/">
        <h3>QuixaNotify</h3>
      </Link>
      <ul id='nav-links'>
        {!isAuthenticated && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Cadastre-se</NavLink>
            </li>
          </>
        )}
        {isAuthenticated && (
          <>
            <li>
              <NavLink to="/my-reclamation">Minhas Reclamações</NavLink>
            </li>
            <li>
              <button onClick={handleLogout}>Sair</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavbarAuth;