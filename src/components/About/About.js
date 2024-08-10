import React from 'react';
import { Parallax } from 'react-parallax';
import './About.css';

const About = () => (
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
        <div className="about-education">
          <h3>Education</h3>
          <div className="about-education-item">
            <div className='education-item-title'>
              <img src='/mcgill-logo.png' alt='McGill University' />
              <h4>Bachelor of Science in Computer Science and Statistics</h4>
            </div>
            <div className="about-education-item-content">
              <p>
                McGill University, Montreal, QC, Canada
              </p>
              <div className='education-date'> September 2018 - May 2023</div>
            </div>
          </div>
          <div className="about-education-item">
            <div className='education-item-title'>
              <img src='/clw.png' alt='McGill University' />
              <h4>Scientific Baccaleaureat with specialty in Math and Physics</h4>
            </div>
            <div className="about-education-item-content">
              <p>
                College Louise Wegmann, Beirut, Lebanon
              </p>
              <div className='education-date'> September 2015 - June 2018</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Parallax>
);

export default About;
