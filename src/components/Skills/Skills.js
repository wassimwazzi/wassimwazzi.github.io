import React from 'react';
import { Parallax } from 'react-parallax';
import './Skills.css';

const Skill = ({ img, title }) => (
    <div className="about-skill" data-aos="fade-up">
        <img src={img} alt={title} title={title} />
        <div className="tooltip">{title}</div>
    </div>
);

const Skills = () => (
    <Parallax bgImage="/Skills.jpg" strength={700}>
        <section id="skills" className="skills full-height">
            <div className="skills-content" data-aos="fade-up">
                <div className="skills-category">
                    <h3>Programming Languages</h3>
                    <div className="skills-list">
                        <Skill img="/python.png" title="Python" />
                        <Skill img="/java.png" title="Java" />
                        <Skill img="/javascript.png" title="JavaScript" />
                        <Skill img="/sql.png" title="SQL" />
                        <Skill img="/r.png" title="R" />
                        <Skill img="/c.png" title="C" />
                        <Skill img="/ruby.png" title="Ruby" />
                        <Skill img="/matlab.png" title="Matlab" />
                        <Skill img="/perl.png" title="Perl" />
                        <Skill img="/ocaml.png" title="OCaml" />
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Frameworks</h3>
                    <div className="skills-list">
                        <Skill img="/react.png" title="React" />
                        <Skill img="/node-js.png" title="Node.js" />
                        <Skill img="/django.png" title="Django" />
                        <Skill img="/flask.png" title="Flask" />
                        <Skill img="/maven.png" title="Maven" />
                        <Skill img="/spring-boot.png" title="Spring Boot" />
                        <Skill img="/ruby-on-rails.png" title="Ruby on Rails" />
                        <Skill img="/bootstrap.png" title="Bootstrap" />
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Tools</h3>
                    <div className="skills-list">
                        <Skill img="/git.png" title="Git" />
                        <Skill img="/docker.png" title="Docker" />
                        <Skill img="/kubernetes.png" title="Kubernetes" />
                        <Skill img="/aws.png" title="AWS" />
                        <Skill img="/azure.png" title="Azure" />
                        <Skill img="/linux.png" title="Linux" />
                        <Skill img="/ansible.png" title="Ansible" />
                        <Skill img="/grafana.png" title="Grafana" />
                        <Skill img="/redis.png" title="Redis" />
                        <Skill img="/splunk.png" title="Splunk" />
                        <Skill img="/celery.png" title="Celery" />
                    </div>
                </div>
            </div>
        </section>
    </Parallax>
);

export default Skills;
