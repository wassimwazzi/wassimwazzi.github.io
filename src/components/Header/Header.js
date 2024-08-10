import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className='header-content'>
      <h1 className="header-title">Wassim Wazzi</h1>
      <nav className="header-nav">
        <ul className="header-menu">
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
