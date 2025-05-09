import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Substitua pelo caminho correto do logo

const Header = () => {
  return (
    <header className="navbar">
      <Link to="/feed">
        <img src={logo} alt="SinosConnect" className="logo" />
      </Link>
      <nav>
        <ul>
          <li><Link to="/perfil">Perfil</Link></li>
          <li><Link to="/comunidades">Comunidades</Link></li>
          <li><Link to="/sinosflix">Sinos Flix</Link></li>
          <li><Link to="/repositories">Repositórios</Link></li>
        </ul>
      </nav>
      <div className="icons">
        <span className="notification">🔔</span>
        <span className="settings-icon">⚙️</span>
        <div className="settings-menu">
          <button id="toggle-dark-mode">🌙 Modo Escuro</button>
          <button id="logout">🚪 Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header;