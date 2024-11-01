import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTheme } from '../Theme/ThemeContext';
import './Contact.css';

const Contact = () => {
  const { isLight } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true); // Disable button

    emailjs.send('service_skk3m5h', 'contact_form', formData, 'yHl89UB6f_j5WO5pB')
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ user_name: '', user_email: '', message: '' }); // Clear form
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again.');
      })
      .finally(() => {
        setHasSubmitted(true)
        setIsSubmitting(false); // Re-enable button after processing
      });
  };

  return (
    <div className="contact">
      <div className="contact-content" data-aos="fade-up">
        <h2 className="contact-title">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="user_name" placeholder="Name" value={formData.user_name} onChange={handleChange} required />
          <input type="email" name="user_email" placeholder="Email" value={formData.user_email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit" disabled={isSubmitting || hasSubmitted}>Send Message</button>
        </form>
        <div className="contact-links">
          <p>Connect with me:</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/wassimwazzi" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={`./linkedin.png`} style={{ width: '50px' }} alt="linkedin" />
            </a>
            <a href="https://github.com/wassimwazzi" target="_blank" rel="noopener noreferrer" className="social-link">
              <img src={`./github-${isLight() ? 'light' : 'dark'}.png`} style={{ width: '50px' }} alt="github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
