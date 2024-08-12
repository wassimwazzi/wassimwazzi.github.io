import React from 'react';
import { Parallax } from 'react-parallax';
import './Footer.css';

const Footer = () => (
  <Parallax
    bgImage="/Footer.jpg"
    strength={500}
  >
    <div className="footer" data-aos="fade-up">
      <p className="footer-text">
        &copy; 2024 Wassim Wazzi. All rights reserved.
      </p>
      <p className="footer-text">
        Follow me on <a href="https://linkedin.com/in/wassimwazzi">LinkedIn</a> and <a href="https://github.com/wassimwazzi">GitHub</a>.
      </p>
      <p className='contact-text'>
        <a href="mailto:wassimwazzi00@gmail.com">Contact me</a>
      </p>
      <p className='language-text'>
        English |  Français | عربي
      </p>
    </div>
  </Parallax>
);

export default Footer;
