import React from 'react';
import './Skills.css';
import Scrollable from '../common/ScrollableContent/Scrollable';
import { useTheme } from '../Theme/ThemeContext';


const Skill = ({ img, title }) => (
    <div className="skill" data-aos="fade-up">
        <img src={img} alt={title} title={title} />
        <div className="tooltip">{title}</div>
    </div>
);

const Skills = () => {
    const { isLight } = useTheme()
    const SKILLS = [
        {
            title: "Programming Languages",
            skills: [
                { img: 'python.png', title: 'Python' },
                { img: 'java.png', title: 'Java' },
                { img: 'javascript.png', title: 'JavaScript' },
                { img: 'sql.png', title: 'SQL' },
                { img: 'r.png', title: 'R' },
                { img: 'c.png', title: 'C' },
                { img: 'ruby.png', title: 'Ruby' },
                { img: 'matlab.png', title: 'Matlab' },
                { img: 'perl.png', title: 'Perl' },
                { img: 'ocaml.png', title: 'OCaml' },
            ]
        },
        {
            title: "Frameworks",
            skills: [
                { img: 'react.png', title: 'React' },
                { img: 'node-js.png', title: 'Node.js' },
                { img: 'django.png', title: 'Django' },
                { img: 'flask.png', title: 'Flask' },
                { img: 'maven.png', title: 'Maven' },
                { img: 'spring-boot.png', title: 'Spring Boot' },
                { img: 'ruby-on-rails.png', title: 'Ruby on Rails' },
                { img: 'bootstrap.png', title: 'Bootstrap' },
            ]
        },
        {
            title: "Tools",
            skills: [
                { img: 'git.png', title: 'Git' },
                { img: 'docker.png', title: 'Docker' },
                { img: 'kubernetes.png', title: 'Kubernetes' },
                { img: `aws-${isLight() ? 'light' : 'dark'}.png`, title: 'AWS' },
                { img: 'azure.png', title: 'Azure' },
                { img: 'linux.png', title: 'Linux' },
                { img: 'ansible.png', title: 'Ansible' },
                { img: 'redis.png', title: 'Redis' },
                { img: 'splunk.png', title: 'Splunk' },
                { img: 'celery.png', title: 'Celery' },
            ]
        }
    ];
    return (
        <Scrollable>
            {
                SKILLS.map((skillData, index) => (
                    // <Card>
                    <div className="skills-category" key={index}>
                        <h3>{skillData.title}</h3>
                        <div className="skills-list">
                            {skillData.skills.map((skill, index2) => (
                                <Skill key={index2} img={`./skills/${skill.img}`} title={skill.title} />
                            ))}
                        </div>
                    </div>
                    // </Card>
                ))
            }
        </Scrollable>
    )
};

export default Skills;
