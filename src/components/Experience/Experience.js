import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';
import './Experience.css';

const Experience = () => {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.experience');
            const rect = element.getBoundingClientRect();
            const height = window.innerHeight;
            const totalHeight = rect.height;

            let amountSeen = height - rect.y;
            // divide by a fraction of height so it moves with the scroll
            amountSeen = amountSeen - height / 8;

            let percent = (amountSeen / totalHeight) * 100;
            percent = Math.min(100, Math.max(0, percent));
            setScrollPercent(percent);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call to set progress on load

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Parallax bgImage="/Experience.jpg" strength={500}>
            <section className="experience">
                <div className="experience-title" data-aos="fade-up">
                    <h2>Experience</h2>
                    {/* <p>Explore my journey through the various roles I've taken on.</p> */}
                </div>
                <div className="experience-list">
                    <div className="experience-item" data-aos="fade-up">
                        <div className="experience-info">
                            <div className="experience-details">
                                <h3>Morgan Stanley</h3>
                                <p>Montreal Canada</p>
                                <p className="experience-date">August 2023 - Present</p>
                            </div>
                        </div>
                        <div className="experience-description">
                            <h3>Technology Associate</h3>
                            <p>Managed and optimized multiple LDAP environments, crucial for powering Identity and Access Management across the organization </p>
                            <p>Ensured 100% reliability with zero downtime for systems handling over 1 billion daily requests</p>
                            <p>Enhanced automation of blue/green deployments using Ansible and Python, streamlining the process of creating new environments that meet stringent High Availability and Resiliency standards</p>
                            <p>Founded and organized the Athletics Committee, launching two Morgan Stanley soccer teams and leading their participation in the Corporate League</p>
                        </div>
                    </div>
                    <div className="experience-item" data-aos="fade-up">
                        <div className="experience-info">
                            <div className="experience-details">
                                <h3>BMO Radicle</h3>
                                <p>Montreal Canada</p>
                                <p className="experience-date">May 2022 - June 2023</p>
                            </div>
                        </div>
                        <div className="experience-description">
                            <h3>Full Stack Developer Intern</h3>
                            <p>Collaborated with an Agile team to develop the ClimateSmartBusiness website using Ruby on Rails, CSS, JavaScript, HTML, PostgreSQL, and Redis</p>
                            <p>Contributed to rewriting the codebase using Django and React, leading to a much smoother and modern website</p>
                            <p>Streamlined the website to support live training sessions by integrating with Thinkific</p>
                            <p>Fully automated GHG emissions calculations of clients by collecting and processing utility provider data, completely eliminating the need for manual user input</p>
                        </div>
                    </div>
                    <div className="experience-item" data-aos="fade-up">
                        <div className="experience-info">
                            <div className="experience-details">
                                <h3>Microsoft</h3>
                                <p>Montreal, Canada</p>
                                <p className="experience-date">September 2021 - May 2022</p>
                            </div>
                        </div>
                        <div className="experience-description">
                            <h3>QA Developer Intern</h3>
                            <p>
                                Worked at Nuance Communications, a Microsoft subsidiary, providing customer authentication for call centers using voice biometrics.
                            </p>
                            <p>
                                Developed an automated testing framework to identify software bugs pre-production in the multiple micro-services used for streaming media, and connecting to the call center’s computer-telephony integration
                            </p>
                            <p>
                                Provided official QA approval for new releases for cloud and on-premises services
                            </p>
                            <p>
                                Developed a tool to automate manual QA end-to-end testing, replacing the process of making manual calls and checking results. Automated hundreds of scenarios, significantly enhancing testing speed and accuracy
                            </p>
                        </div>
                    </div>
                    <div className="experience-item" data-aos="fade-up">
                        <div className="experience-info">
                            <div className="experience-details">
                                <h3>McGill University</h3>
                                <p>Montreal, Canada</p>
                                <p className="experience-date">May 2021 - December 2021</p>
                            </div>
                        </div>
                        <div className="experience-description">
                            <h3>Research Assistant</h3>
                            <p>
                                Published results in the <a href='https://worldhappiness.report/ed/2022/trends-in-conceptions-of-progress-and-well-being/'>World Happiness Report</a>
                            </p>
                            <p>
                                Researched and analyzed well-being and progress indicators to improve decision making behind socio-economic governmental policies
                            </p>
                            <p>
                                Looked for trends and insight into sustainability, economic development, and general happiness
                            </p>
                        </div>
                    </div>
                    <div className="experience-item" data-aos="fade-up">
                        <div className="experience-info">
                            <div className="experience-details">
                                <h3>McGill University</h3>
                                <p>Montreal, Canada</p>
                                <p className="experience-date">September 2021 - May 2023</p>
                            </div>
                        </div>
                        <div className="experience-description">
                            <h3>Evaluator</h3>
                            <p>
                                MATH 242 (Analysis 1), MATH 235 (Algebra 1), MATH 240 (Discrete Structures)
                            </p>
                            <p>
                                Qualified by receiving A’s in the above classes
                            </p>
                        </div>
                    </div>
                    <div className="experience-item" data-aos="fade-up">
                        <div className="experience-info">
                            <div className="experience-details">
                                <h3>McGill University</h3>
                                <p>Montreal, Canada</p>
                                <p className="experience-date">Jan 2019 - May 2022</p>
                            </div>
                        </div>
                        <div className="experience-description">
                            <h3>Tutor</h3>
                            <p>
                                Tutored 30+ students in multiple calculus, algebra, statistics, and computer science courses
                            </p>
                            <p>
                                Qualified by receiving A’s in the classes I tutor
                            </p>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-bar-fill" style={{ height: `${scrollPercent}%` }} />
                    </div>
                </div>
            </section>

        </Parallax >
    );
};

export default Experience;
