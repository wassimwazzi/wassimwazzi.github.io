import React from 'react';
import { Parallax } from 'react-parallax';
import './About.css';

const Skill = ({ img, title }) => (
  <div className="about-skill" data-aos="fade-up">
    <img src={img} alt={title} title={title} />
    <div className="tooltip">{title}</div>
  </div>
);

const About = () => (
  <Parallax bgImage="/About.jpg" strength={700}>
    <section id="about" className="about full-height">
      <div className="about-content" data-aos="fade-up">
        <h2 className="about-title">Hi, I'm Wassim</h2>
        <div className="about-description">
          <p className='about-slide-left'>
            A dedicated and proven software developer and DevOps engineer with a strong foundation in Computer Science and Statistics
          </p>
          <p>
            Passionate about problem-solving and tackling challenging tasks, and aim to leverage and enhance my software development and data analytics skills to address real-world and business problems
          </p>
          <p className='about-slide-right'>
            I'm always looking to expand my knowledge, especially in AI, Machine Learning, and Data Science to drive innovative solutions and continuous improvement
          </p>
        </div>
      </div>
      <div className="about-skills">
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <div className="about-skills-list">
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
          <div className="about-skills-list">
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
          <div className="about-skills-list">
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

export default About;
