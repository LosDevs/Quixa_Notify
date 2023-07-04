import { useEffect, useState } from "react";
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './Navbar.css';

function NavbarAuth() {
  const [isCompany, setIsCompany] = useState(false);
  
  const navigate = useNavigate();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token') || 'null');
    if (token) setIsAuthenticated(true);
  }, [localStorage]);

  useEffect(() => {
    const company = JSON.parse(localStorage.getItem('isCompany') || 'null');
    if (company) setIsCompany(JSON.parse(company));
  });

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('isCompany');
    setIsAuthenticated(false);
    setIsCompany(false);
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
        {(isAuthenticated && !isCompany) && (
          <>
            <li>
              <NavLink to="/my-reclamation">Minhas Reclamações</NavLink>
            </li>
          </>
        )}
        {(isCompany) && (
          <>
            <li>
              <Link to={"/company"}>Dashboard</Link>
            </li>
          </>
        )}
        {(isAuthenticated) && (
          <>
            <li>
              <button onClick={handleLogout} className="btn text-white">Sair</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavbarAuth;
