import React, { useEffect, useRef } from 'react';
import { Parallax } from 'react-parallax';
import './About.css';

const About = () => {
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
    <Parallax bgImage="/About.jpg" strength={700}>
      <section id="about" className="about full-height">
        <div className="about-content" data-aos="fade-up">
          <h2 className="about-title">Hi, I'm Wassim</h2>
          <div className="about-description">
            <p className='about-slide-left'>
              A dedicated and proven software developer and DevOps engineer with a strong foundation in Computer Science and Statistics
            </p>
            <p>
              Passionate about problem-solving and tackling challenging tasks, and aim to leverage and enhance my software development and data analytics skills to address real-world and business problems
            </p>
            <p className='about-slide-right'>
              I'm always looking to expand my knowledge, especially in AI, Machine Learning, and Data Science to drive innovative solutions and continuous improvement
            </p>
          </div>
        </div>
        <div className="about-education" data-aos="fade-up" data-aos-offset="200">
          <h3>Education</h3>
          <div
            className="about-education-item"
            ref={(el) => (educationItemsRef.current[0] = el)}>
            <div className='education-item-title'>
              <img src='/mcgill-logo.png' alt='McGill University' />
              <div>Bachelor of Science in Computer Science and Statistics</div>
            </div>
            <div className="about-education-item-content">
              <p>
                McGill University, Montreal, QC, Canada
              </p>
              <div className='education-date'> September 2018 - May 2023</div>
            </div>
          </div>
          <div
            className="about-education-item"
            ref={(el) => (educationItemsRef.current[1] = el)}>
            <div className='education-item-title'>
              <img src='/clw.png' alt='McGill University' />
              <div>Scientific Baccaleaureat with specialty in Math and Physics</div>
            </div>
            <div className="about-education-item-content">
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

export default About;
