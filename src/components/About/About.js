import React from 'react';
import { Parallax } from 'react-parallax';
import './About.css';

const Skill = ({ img, title }) => (
  <div className="about-skill" data-aos="fade-up">
    <img src={img} alt={title} title={title} />
    <div className="tooltip">{title}</div>
  </div>
);

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
      </div>
    </section>
  </Parallax>
);

export default About;
