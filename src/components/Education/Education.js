import React from 'react';
import Scrollable from '../common/ScrollableContent/Scrollable';
import Card from '../common/Card/Card';
import './Education.css';

const EDUCATION_ITEMS = [
  {
    title: 'Bachelor of Science in Computer Science and Statistics',
    institution: 'McGill University, Montreal, QC, Canada',
    date: 'September 2018 - May 2023',
    logo: '/mcgill-logo.png',
    description: 'Focus on software development, data science, and statistical analysis. Completed notable projects in machine learning and data analytics.',
  },
  {
    title: 'Scientific Baccalaureate with Specialty in Math and Physics',
    institution: 'College Louise Wegmann, Beirut, Lebanon',
    date: 'September 2015 - June 2018',
    logo: '/clw.png',
    description: 'Graduated with honors, specializing in advanced mathematics and physics.',
  },
];

const Education = () => {
  return (
    <section id="education" className="education">
      <Scrollable>
        {EDUCATION_ITEMS.map((item, index) => (
          <Card key={index}>
            <div className="education-item">
              <img src={item.logo} alt={item.institution} className="education-logo" />
              <div className='education-item-content'>
                <div className="education-item-title">
                  {item.title}
                </div>
                <div className="education-item-instirtution">
                  <p>{item.institution}</p>
                  <div className="education-date">{item.date}</div>
                </div>
                <p className="education-description">{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </Scrollable>
    </section>
  );
};

export default Education;
