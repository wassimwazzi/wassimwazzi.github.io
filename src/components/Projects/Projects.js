import React, { useState, useEffect, useCallback } from 'react';
import Scrollable from '../common/ScrollableContent/Scrollable';
import Card from '../common/Card/Card';
import { useTheme } from '../Theme/ThemeContext';
import './Projects.css';

const PROJECT_ITEMS = [
  {
    title: 'Personal Budgeting App',
    link: { link: 'https://budget-manager-frontend-0ec640b5ed51.herokuapp.com/', image: './projects/budget_manager/favicon.ico' },
    github: 'https://github.com/wassimwazzi/budget-manager-web',
    images: ['./projects/budget_manager/1.png', './projects/budget_manager/2.png', './projects/budget_manager/3.png', './projects/budget_manager/4.png', './projects/budget_manager/5.png', './projects/budget_manager/6.png'],
    details: [
      "Financial goals planning and detailed budgeting, showing spend per category and summary dashboard.",
      "Automated transaction retrieval from bank and categorization.",
    ],
  },
  {
    title: 'Splendor Game',
    github: 'https://github.com/wassimwazzi/splendor',
    details: [
      "Collaborated on a team of 6 to develop the Splendor game with an expansion pack for the software engineering final project.",
      "The project featured a Lobby Service for online multiplayer support, a Python-based UI for an intuitive user interface, and a robust Java backend for seamless game logic.",
      "Dockerized the application, enabling continuous integration and deployment.",
    ],
  },
  {
    title: 'Blind Face Restoration',
    github: 'https://github.com/wassimwazzi/Image-Restoration',
    images: ['./projects/blind_face/1.png', './projects/blind_face/2.png', './projects/blind_face/3.png'],
    details: [
      <a href='https://openreview.net/group?id=ML_Reproducibility_Challenge/2021/Fall' key="challenge-link">Reproducibility challenge</a>,
      <>
        Based on: <a href='https://arxiv.org/pdf/2101.04061.pdf' key="paper-link">Towards Real-World Blind Face Restoration with Generative Facial Prior</a>
      </>,
      "Restored old or blurry images using generative adversarial networks",
    ],
  },
  {
    title: 'Multi-label Classification of Handwritten Digits and English Alphabet',
    github: 'https://github.com/wassimwazzi/Multi-Label-Classification',
    details: [
      "Built a neural network to correctly classify hand-written numbers and letters on images.",
      "Achieved over 95% accuracy on over 40,000 test images.",
    ],
  },
  {
    title: 'Chess Game and AI',
    github: 'https://github.com/wassimwazzi/Chess',
    details: [
      "Designed a chess engine in Python to support 2 human or AI players, with graphics.",
      "Created multiple AI players using minimax and Monte Carlo Algorithm.",
    ],
  },
];

const Projects = () => {
  const { isLight } = useTheme();
  const [overlayImage, setOverlayImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentProjectImages, setCurrentProjectImages] = useState([]);

  const openOverlay = (images, index) => {
    console.log('open overlay', images, index)
    setCurrentProjectImages(images);
    setCurrentImageIndex(index);
    setOverlayImage(images[index]);
  };

  const closeOverlay = () => {
    setOverlayImage(null);
    setCurrentImageIndex(0);
    setCurrentProjectImages([]);
  };

  const canToggle = useCallback((direction) => {
    if (direction === 'right') {
      return currentImageIndex < currentProjectImages.length - 1;
    }
    return currentImageIndex > 0
  }, [currentImageIndex, currentProjectImages.length])

  const toggleImage = useCallback((direction) => {
    if (!canToggle(direction)) return;
    if (direction === 'right') {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1));
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1));
    }
  }, [canToggle]);

  const handleKeyDown = useCallback((event) => {
    if (!overlayImage) return;
    if (event.key === 'ArrowRight') {
      toggleImage('right')
    } else if (event.key === 'ArrowLeft') {
      toggleImage('left');
    } else if (event.key === 'Escape') {
      closeOverlay();
    }
  }, [overlayImage, toggleImage]);

  useEffect(() => {
    if (overlayImage) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [overlayImage, currentProjectImages, handleKeyDown]);

  useEffect(() => {
    console.log("HERE", currentImageIndex, overlayImage, currentImageIndex)
    if (currentProjectImages.length > 0) {
      setOverlayImage(currentProjectImages[currentImageIndex]);
    }
  }, [currentImageIndex, currentProjectImages, overlayImage]);

  return (
    <>
      <Scrollable>
        {PROJECT_ITEMS.map((project, index) => (
          <Card key={index}>
            <div className="project-item">
              <div className='project-content'>
                <div className="project-title">
                  <h3>{project.title}</h3>
                  {project.link && <div className="project-link">
                    <img src={project.link.image || ''} style={{ width: '50px' }} alt='' />
                    <a href={project.link.link} target="_blank" rel="noopener noreferrer">Give it a try!</a>
                  </div>}
                  <div className="github-link">
                    <img src={`./github-${isLight() ? 'light' : 'dark'}.png`} style={{ width: '50px' }} alt="github" />
                    <a href={project.github} target="_blank" rel="noopener noreferrer">Read the code!</a>
                  </div>
                </div>
                <div className="project-details-container">
                  <div className="project-details">
                    {project.details.map((detail, i) => (
                      <p key={i}>{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
              {project.images && (
                <div className="project-images">
                  {project.images.map((image, i) => (
                    <img
                      src={image}
                      alt=''
                      className="clickable-image"
                      onClick={() => openOverlay(project.images, i)}
                      key={i}
                    />
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
      </Scrollable>

      {overlayImage && (
        <div className="overlay">
          <span className="close-button" onClick={closeOverlay}>&times;</span>
          <img src={overlayImage} alt="Project screenshot" className="overlay-image" />
          <button
            className={`arrow left-arrow ${canToggle('left') || 'disabled'}`}
            onClick={() => toggleImage('left')}
          >
            &#10094;
          </button>
          <button
            className={`arrow right-arrow ${canToggle('right') || 'disabled'}`}
            onClick={() => toggleImage('right')}
          >
            &#10095;
          </button>
        </div>
      )}
    </>
  );
};

export default Projects;