import React from 'react';
import { Parallax } from 'react-parallax';
import './About.css';

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
            <div className="about-skill" data-aos="fade-up">
              <img src="/python.png" alt="Python" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/java.png" alt="Java" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/javascript.png" alt="JavaScript" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/sql.png" alt="SQL" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/r.png" alt="R" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/c.png" alt="c" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/ruby.png" alt="ruby" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/matlab.png" alt="matlab" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/perl.png" alt="perl" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/ocaml.png" alt="ocaml" />
            </div>
          </div>
        </div>
        <div className="skills-category">
          <h3>Frameworks</h3>
          <div className="about-skills-list">
            <div className="about-skill" data-aos="fade-up">
              <img src="/react.png" alt="React" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/node-js.png" alt="Node.js" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/django.png" alt="fjango" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/flask.png" alt="flask" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/maven.png" alt="maven" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/spring-boot.png" alt="spring-boot" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/ruby-on-rails.png" alt="ruby-on-rails" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/bootstrap.png" alt="bootstrap" />
            </div>
          </div>
        </div>
        <div className="skills-category">
          <h3>Tools</h3>
          <div className="about-skills-list">
            <div className="about-skill" data-aos="fade-up">
              <img src="/git.png" alt="Git" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/docker.png" alt="Docker" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/kubernetes.png" alt="Kubernetes" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/aws.png" alt="AWS" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/azure.png" alt="Azure" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/linux.png" alt="Linux" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/ansible.png" alt="ansible" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/grafana.png" alt="grafana" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/redis.png" alt="redis" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/splunk.png" alt="splunk" />
            </div>
            <div className="about-skill" data-aos="fade-up">
              <img src="/celery.png" alt="celery" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Parallax>
);

export default About;
