import React from 'react';
import Scrollable from '../ScrollableContent/Scrollable';
import './Education.css';
import { Parallax } from 'react-parallax';

const Education = () => {
  const educationItems = [
    {
      title: 'Bachelor of Science in Computer Science and Statistics',
      institution: 'McGill University, Montreal, QC, Canada',
      date: 'September 2018 - May 2023',
      logo: '/mcgill-logo.png',
    },
    {
      title: 'Scientific Baccalaureate with Specialty in Math and Physics',
      institution: 'College Louise Wegmann, Beirut, Lebanon',
      date: 'September 2015 - June 2018',
      logo: '/clw.png',
    },
    {
      title: 'Bachelor of Science in Computer Science and Statistics',
      institution: 'McGill University, Montreal, QC, Canada',
      date: 'September 2018 - May 2023',
      logo: '/mcgill-logo.png',
    },
    {
      title: 'Bachelor of Science in Computer Science and Statistics',
      institution: 'McGill University, Montreal, QC, Canada',
      date: 'September 2018 - May 2023',
      logo: '/mcgill-logo.png',
    },
  ];

  return (
    <Parallax strength={300}>
      <section id="education" className="education">
        <Scrollable title={'Education'}>
          {educationItems.map((item, index) => (
            <div className="education-item" key={index}>
              <div className="education-item-title">
                <img src={item.logo} alt={item.institution} className="education-logo" />
                <div>{item.title}</div>
              </div>
              <div className="education-item-content">
                <p>{item.institution}</p>
                <div className="education-date">{item.date}</div>
              </div>
            </div>
          ))}
        </Scrollable>
      </section>
    </Parallax>
  );
};

export default Education;
