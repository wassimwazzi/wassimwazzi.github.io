// src/App.jsx
import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import MobileNotice from './components/mobileNotice/Notice';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import './styles/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <MobileNotice />
      <main>
        <About />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default App;
