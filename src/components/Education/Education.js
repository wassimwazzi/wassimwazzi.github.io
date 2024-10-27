import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-parallax';
import './Education.css';

const Education = () => {
  const educationItemsRef = useRef([]);

  useEffect(() => {
    const currentRef = educationItemsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when the element is in view
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 } // Adjust this threshold as needed
    );

    // Observe each education item
    currentRef.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      // Unobserve on component cleanup
      if (currentRef) {
        currentRef.forEach((item) => {
          if (item) {
            observer.unobserve(item);
          }
        });
      }
    };
  }, [educationItemsRef]);

  return (
    <Parallax strength={700}>
      <section id="education" className="education full-height">
        <div className="education" data-aos="fade-up" data-aos-offset="200">
          <h1 className='title'>Education</h1>
          <div
            className="education-item"
            ref={(el) => (educationItemsRef.current[0] = el)}>
            <div className='education-item-title'>
              <img src='/mcgill-logo.png' alt='McGill University' />
              <div>Bachelor of Science in Computer Science and Statistics</div>
            </div>
            <div className="education-item-content">
              <p>
                McGill University, Montreal, QC, Canada
              </p>
              <div className='education-date'> September 2018 - May 2023</div>
            </div>
          </div>
          <div
            className="education-item"
            ref={(el) => (educationItemsRef.current[1] = el)}>
            <div className='education-item-title'>
              <img src='/clw.png' alt='McGill University' />
              <div>Scientific Baccalaureate with Specialty in Math and Physics</div>
            </div>
            <div className="education-item-content">
              <p>
                College Louise Wegmann, Beirut, Lebanon
              </p>
              <div className='education-date'> September 2015 - June 2018</div>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Education;
