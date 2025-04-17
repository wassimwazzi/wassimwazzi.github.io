import React from 'react';
import Scrollable from '../common/ScrollableContent/Scrollable';
import Card from '../common/Card/Card';
import './Experience.css';

const EXPERIENCE_ITEMS = [
    {
        company: 'Morgan Stanley',
        location: 'Montreal, Canada',
        date: 'November 2024 - Present',
        title: 'Data Engineer Level II',
        descriptions: [
            'Built and enhanced the firm’s centraldataqualitytool, enabling analysts to create complex data validation rules on a GUI, while adapting to a fast-paced, high-stakes environment to meet evolving business needs',
            'Developed an alertingframework to notify users of data quality violations in real time, allowing speedier error remediation',
            'Designed a dashboard to provide visibility for analysts into data quality scores and trends',
            'Conducted code reviews, and added processes to ensure high standards in design patterns, maintainability, and test coverage, allowing for greater scalability and robustness',
        ],
    },
    {
        company: 'Morgan Stanley',
        location: 'Montreal, Canada',
        date: 'August 2023 - November 2024',
        title: 'Site Reliability Engineer level II',
        descriptions: [
            'Managed and optimized multiple LDAP environments, crucial for powering Identity and Access Management across the organization',
            'Automated infrastructure provisioning and blue/green deployments using Ansible, Python and Terraform, improving high availability and resilience',
            'Performed Load and Stress Testing on the servers to ensure robustness and ability to handle customer traffic during peak hours',
            'Developed Splunk Dashboards to improve system observability, showing real time alerts, metrics, health checks, and SLOs',
            'Founded and organized the Athletics Committee, launching two Morgan Stanley soccer teams and leading their participation in the Corporate League.',
        ],
    },
    {
        company: 'BMO Radicle',
        location: 'Montreal, Canada',
        date: 'May 2022 - June 2023',
        title: 'Full Stack Developer',
        descriptions: [
            'Developed the ClimateSmartBusiness website using Ruby on Rails, Django, React, PostgreSQL and Redis',
            'Consistently exceeded expectations and delivered significant features to the website, ramping up quickly, writing high quality code, and helping teammates through pair programming',
            'Integrated with Thinkific to support live training sessions, adding WebHooks and Websockets in the process',
            'Fully automated GHG emissions calculations, by collecting and processing utility provider data, eliminating the need for manual work, improving efficiency and reducing the possibilities of human error',
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
