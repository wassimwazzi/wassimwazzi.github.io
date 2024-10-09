import React from 'react';
import { Parallax } from 'react-parallax';
import './Projects.css';
import HoverTitle from '../HoverTitle/Hover';

const Project = ({ logo, title, description, link }) => {
  const top = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
      <img
        src={logo}
        alt={title}
        style={{ width: 'var(--logo-size-lg)', height: 'var(--logo-size-lg)', borderRadius: '50%' }}
      />
      <h3
        style={{
          fontSize: 'var(--font-size-xl)',
          color: 'var(--secondary-color)',
        }}
      >
        {title}
      </h3>
    </div>
  );

  const below = (
    <div style={{ padding: 'var(--spacing-2)', textAlign: 'center', fontSize: 'var(--font-size)' }}>
      {description.map((point, index) => (
        <p key={index} style={{ lineHeight: 'var(--line-height-lg)', marginBottom: 'var(--spacing-1)' }}>
          {point}
        </p>
      ))}
    </div>
  );

  return <HoverTitle top={top} below={below} />;
};


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
          <a href='https://github.com/wassimwazzi/Image-Restoration'>
            <div className="project-card-inner">
              <div className="project-card-front">
                <h3>Blind Face Restoration</h3>
              </div>
              <div className="project-card-back">
                <div className="inner-content">
                  <p><a href='https://openreview.net/group?id=ML_Reproducibility_Challenge/2021/Fall'> Reproducibility challenge </a></p>
                  <p>Based on: <a href='https://arxiv.org/pdf/2101.04061.pdf'>Towards Real-World Blind Face Restoration with Generative Facial Prior</a></p>
                  <p>Restored old or blurry images using generative adversarial networks</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <a href='https://github.com/wassimwazzi/budget-manager-web'>
            <div className="project-card-inner">
              <div className="project-card-front">
                <h3>Personal Budgeting App </h3>
              </div>
              <div className="project-card-back">
                <div className="inner-content">
                  <p>Financial goals planning and detailed budgeting, showing spend per category and summary dashboard</p>
                  <p>Automated transaction retrieval from bank and categorization</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <a href='https://github.com/wassimwazzi/Multi-Label-Classification'>
            <div className="project-card-inner">
              <div className="project-card-front">
                <h3>Multi-label classification of handwritten digits and English alphabet</h3>
              </div>
              <div className="project-card-back">
                <div className="inner-content">
                  <p> Built a neural network to correctly classify hand-written numbers and letters on images </p>
                  <p>Achieved over 95% accuracy on over 40, 000 test images</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <a href='https://github.com/wassimwazzi/Chess'>
            <div className="project-card-inner">
              <div className="project-card-front">
                <h3>Chess game and AI </h3>
              </div>
              <div className="project-card-back">
                <div className="inner-content">
                  <p>Designed a chess engine in python to support 2 human or AI players, with graphics</p>
                  <p>Created multiple AI players using minimax and Monte Carlo Algorithm</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-card" data-aos="zoom-in">
          <a href='https://github.com/wassimwazzi/splendor'>
            <div className="project-card-inner">
              <div className="project-card-front">
                <h3>Splendor Game </h3>
              </div>
              <div className="project-card-back">
                <div className="inner-content">
                  <p>Collaborated on a team of 6 to develop the Splendor game with an expansion pack for the  software engineering final project</p>
                  <p>The project featured a Lobby Service for online multiplayer support, a Python-based UI for an intuitive user interface, and a robust Java backend for seamless game logic</p>
                  <p>Dockerized the application, enabling continuous integration and deployment</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <Project logo={'/image_restoration.png'} title={'Blind Face Restoration'} description={[
          <a href='https://openreview.net/group?id=ML_Reproducibility_Challenge/2021/Fall'> Reproducibility challenge </a>,
          <>Based on: <a href='https://arxiv.org/pdf/2101.04061.pdf'>Towards Real-World Blind Face Restoration with Generative Facial Prior</a></>,
          'Restored old or blurry images using generative adversarial networks'
        ]} />
        <Project logo={'/budget-manager.ico'} title={'budget-manager'} description={[
          'Financial goals planning and detailed budgeting, showing spend per category and summary dashboard',
          'Automated transaction retrieval from bank and categorization',
        ]} />
        <Project logo={'/chess.png'} title={'Chess game and AI'} description={[
          'Designed a chess engine in python to support 2 human or AI players, with graphics',
          'Created multiple AI players using minimax and Monte Carlo Algorithm',
        ]} />
        <Project logo={'/splendor.png'} title={'Splendor'} description={[
          'Collaborated on a team of 6 to develop the Splendor game with an expansion pack for the  software engineering final project',
          'The project featured a Lobby Service for online multiplayer support, a Python-based UI for an intuitive user interface, and a robust Java backend for seamless game logic',
          'Dockerized the application, enabling continuous integration and deployment'
        ]} />

      </div>
    </section>
  </Parallax >
);

export default Projects;
