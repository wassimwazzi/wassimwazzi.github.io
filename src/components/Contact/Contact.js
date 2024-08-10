import React from 'react';
import { Parallax } from 'react-parallax';
import './Contact.css';

const Contact = () => (
  <Parallax
    bgImage="/Contact.jpg"
    strength={500}
    blur={{ min: -1, max: 3 }}
  >
    <div className="contact">
      <div className="contact-content" data-aos="fade-up">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-description">
          I’d love to hear from you! Whether you have a question or just want to connect, feel free to reach out.
        </p>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </Parallax>
);

export default Contact;
