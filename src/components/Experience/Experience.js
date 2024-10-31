import React from 'react';
import Scrollable from '../common/ScrollableContent/Scrollable';
import Card from '../common/Card/Card';
import './Experience.css';

const EXPERIENCE_ITEMS = [
    {
        company: 'Morgan Stanley',
        location: 'Montreal, Canada',
        date: 'August 2023 - Present',
        title: 'Technology Associate',
        descriptions: [
            'Managed and optimized multiple LDAP environments, crucial for powering Identity and Access Management across the organization.',
            'Ensured 100% reliability with zero downtime for systems handling over 1 billion daily requests.',
            'Enhanced automation of blue/green deployments using Ansible and Python, streamlining the process of creating new environments that meet stringent High Availability and Resiliency standards.',
            'Founded and organized the Athletics Committee, launching two Morgan Stanley soccer teams and leading their participation in the Corporate League.',
        ],
    },
    {
        company: 'BMO Radicle',
        location: 'Montreal, Canada',
        date: 'May 2022 - June 2023',
        title: 'Full Stack Developer',
        descriptions: [
            'Collaborated with an Agile team to develop the ClimateSmartBusiness website using Ruby on Rails, CSS, JavaScript, HTML, PostgreSQL, and Redis.',
            'Contributed to rewriting the codebase using Django and React, leading to a much smoother and modern website.',
            'Streamlined the website to support live training sessions by integrating with Thinkific.',
            'Fully automated GHG emissions calculations for clients by collecting and processing utility provider data, completely eliminating the need for manual user input.',
        ],
    },
    {
        company: 'Microsoft',
        location: 'Montreal, Canada',
        date: 'September 2021 - May 2022',
        title: 'QA Developer',
        descriptions: [
            'Worked at Nuance Communications, a Microsoft subsidiary, providing customer authentication for call centers using voice biometrics.',
            'Developed an automated testing framework to identify software bugs pre-production in the multiple micro-services used for streaming media, and connecting to the call center’s computer-telephony integration.',
            'Provided official QA approval for new releases for cloud and on-premises services.',
            'Developed a tool to automate manual QA end-to-end testing, replacing the process of making manual calls and checking results, and automated hundreds of scenarios, significantly enhancing testing speed and accuracy.',
        ],
    },
    {
        company: 'McGill University',
        location: 'Montreal, Canada',
        date: 'May 2021 - December 2021',
        title: 'Research Assistant',
        descriptions: [
            'Published results in the World Happiness Report.',
            'Researched and analyzed well-being and progress indicators to improve decision-making behind socio-economic governmental policies.',
            'Explored trends and insights related to sustainability, economic development, and general happiness.',
        ],
    },
    {
        company: 'McGill University',
        location: 'Montreal, Canada',
        date: 'September 2021 - May 2023',
        title: 'Evaluator',
        descriptions: [
            'Evaluated MATH 242 (Analysis 1), MATH 235 (Algebra 1), and MATH 240 (Discrete Structures).',
            'Qualified for this role by receiving A’s in the evaluated classes.',
        ],
    },
    {
        company: 'McGill University',
        location: 'Montreal, Canada',
        date: 'January 2019 - May 2022',
        title: 'Tutor',
        descriptions: [
            'Tutored over 30 students in calculus, algebra, statistics, and computer science courses.',
            'Qualified for this role by receiving A’s in the classes I tutored.',
        ],
    },
];

const Experience = () => {
    return (
        <Scrollable>
            {EXPERIENCE_ITEMS.map((item, index) => (
                <Card key={index}>
                    <div className="experience-item">
                        <div className="experience-info">
                            <h3>{item.company}</h3>
                            <p>{item.location}</p>
                            <p className="experience-date">{item.date}</p>
                        </div>
                        <div className="experience-description">
                            <h3>{item.title}</h3>
                            {item.descriptions.map((desc, i) => (
                                <p key={i}>{desc}</p>
                            ))}
                        </div>
                    </div>
                </Card>
            ))}
        </Scrollable>
    );
};

export default Experience;
