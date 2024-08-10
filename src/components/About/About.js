import React from 'react';
import { Parallax } from 'react-parallax';
import './About.css';

const About = () => (
  <Parallax bgImage="/About.jpg" strength={500}>
    <section id="about" className="about" style={{ backgroundImage: 'url(/About.jpg)' }}>
      <div className="about-content" data-aos="fade-up">
        <h2 className="about-title">About Me</h2>
        <div className="about-description">
          <p>
            A dedicated and proven software developer and DevOps engineer with a strong foundation in Computer Science and Statistics
          </p>
          <p>
            Passionate about problem-solving and tackling challenging tasks, Aiming to leverage and enhance my software development and data analytics skills to address real-world and business problems
          </p>
          <p>
            Always looking to expand my knowledge, especially in AI, Machine Learning, and Data Science to drive innovative solutions and continuous improvement
          </p>
        </div>
      </div>
    </section>
  </Parallax>
);

export default About;
