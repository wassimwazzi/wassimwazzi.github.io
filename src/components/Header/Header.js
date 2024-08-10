// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1 className="header-title">My Portfolio</h1>
    <nav className="header-nav">
      <ul className="header-menu">
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
