// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => (
  <section id="contact" className="contact" data-aos="fade-up">
    <h2 className="contact-title">Contact Me</h2>
    <p className="contact-description">Feel free to reach out for collaborations or just a friendly chat.</p>
    <a href="mailto:your.email@example.com" className="contact-email">your.email@example.com</a>
    <div className="contact-social">
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </section>
);

export default Contact;
