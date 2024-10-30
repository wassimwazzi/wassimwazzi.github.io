// src/App.jsx
import React, { useState, useEffect } from 'react';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import './styles/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      default:
        return <About />;
    }
  };

  return (
    <div className="app-container">
      <main className="content-container">
        <div className="content">
          {renderSection()}
        </div>
        <nav className="nav">
          <div className="nav-links">
            {['about', 'education', 'experience', 'projects', 'skills'].map((section) => (
              <a
                key={section}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(section);
                }}
                className={activeSection === section ? 'active' : ''}
                href="#"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </nav>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
