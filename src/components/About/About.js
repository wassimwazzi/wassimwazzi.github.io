import React from 'react';
import { Parallax } from 'react-parallax';
import './About.css';

const About = () => {
  return (
    <Parallax strength={300}>
      <section id="about" className="about">
        <div className="about-content" data-aos="fade-up">
          <h1 className="title">Hi, I'm Wassim</h1>
          <div className="about-description">
            <p className='about-slide-left'>
              A dedicated software developer and DevOps engineer with a strong foundation in Computer Science and Statistics.
            </p>
            <p>
              Passionate about problem-solving, tackling challenging tasks, and leveraging my software development and data analytics skills to solve real-world business problems.
            </p>
            <p className='about-slide-right'>
              Continuously learning, especially in AI, Machine Learning, and Data Science, to drive innovation and improvement.
            </p>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default About;
