// src/components/Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => (
  <section id="projects" className="projects" data-aos="fade-up">
    <h2 className="projects-title">Projects</h2>
    <div className="projects-list">
      <div className="project-card" data-aos="zoom-in">
        <h3>Project 1</h3>
        <p>A description of your first project.</p>
      </div>
      <div className="project-card" data-aos="zoom-in">
        <h3>Project 2</h3>
        <p>A description of your second project.</p>
      </div>
      <div className="project-card" data-aos="zoom-in">
        <h3>Project 3</h3>
        <p>A description of your third project.</p>
      </div>
    </div>
  </section>
);

export default Projects;
