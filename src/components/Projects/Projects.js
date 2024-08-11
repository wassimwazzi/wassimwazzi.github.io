import React from 'react';
import { Parallax } from 'react-parallax';
import './Projects.css';

const Projects = () => (
  <Parallax
    bgImage="/Projects.jpg"
    strength={500}
    blur={{ min: -1, max: 3 }}
  >
    <section id="projects" className="projects full-height" data-aos="fade-up">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list">
        <div className="project-card" data-aos="zoom-in">
          <div className="project-card-inner">
            <div className="project-card-front">
              <h3>Blind Face Restoration</h3>
            </div>
            <div className="project-card-back">
              <div className="inner-content">
                <p><a href='https://openreview.net/group?id=ML_Reproducibility_Challenge/2021/Fall'> Reproducibility challenge </a></p>
                <p>Based on: <a href='https://arxiv.org/pdf/2101.04061.pdf'>Towards Real-World Blind Face Restoration with Generative Facial Prior</a></p>
                <p>Restored old or blurry images using generative adversarial networks</p>
                <p> <a href='https://github.com/wassimwazzi/Image-Restoration'>(GitHub)</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <div className="project-card-inner">
            <div className="project-card-front">
              <h3>Personal Budgeting App </h3>
            </div>
            <div className="project-card-back">
              <div className="inner-content">
                <p>Financial goals planning and detailed budgeting, showing spend per category and summary dashboard</p>
                <p>Automated transaction retrieval from bank and categorization</p>
                <p> <a href='https://github.com/wassimwazzi/budget-manager-web'>(GitHub)</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <div className="project-card-inner">
            <div className="project-card-front">
              <h3>Multi-label classification of handwritten digits and English alphabet</h3>
            </div>
            <div className="project-card-back">
              <div className="inner-content">
                <p> Built a neural network to correctly classify hand-written numbers and letters on images </p>
                <p>Achieved over 95% accuracy on over 40, 000 test images</p>
                <p> <a href='https://github.com/wassimwazzi/Multi-Label-Classification'>(GitHub)</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <div className="project-card-inner">
            <div className="project-card-front">
              <h3>Chess game and AI </h3>
            </div>
            <div className="project-card-back">
              <div className="inner-content">
                <p>Designed a chess engine in python to support 2 human or AI players, with graphics</p>
                <p>Created multiple AI players using minimax and Monte Carlo Algorithm</p>
                <p> <a href='https://github.com/wassimwazzi/Chess'>(GitHub)</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <div className="project-card-inner">
            <div className="project-card-front">
              <h3>Splendor Game </h3>
            </div>
            <div className="project-card-back">
              <div className="inner-content">
                <p>Collaborated on a team of 6 to develop the Splendor game with an expansion pack for the  software engineering final project</p>
                <p>The project featured a Lobby Service for online multiplayer support, a Python-based UI for an intuitive user interface, and a robust Java backend for seamless game logic</p>
                <p>Dockerized the application, enabling continuous integration and deployment</p>
                <p> <a href='https://github.com/wassimwazzi/splendor'>(GitHub)</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Parallax>
);

export default Projects;
