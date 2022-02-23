import React from "react";
import "./Skills.scss";
import Fades from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import { Fade } from "react-awesome-reveal";

export default function Skills() {
  return (
    <section id="skills" className="skills-container">
      <div className="title1">
        <Fade direction="up" delay={300}>
          <h1>Skills & Experience</h1>
        </Fade>
      </div>
      <div className="info2">
        <p className="description">
          <Fade direction="left" delay={100}>
            <span>
              Since beginning my journey as a freelancer nearly 2 years ago,
              I’ve done remote work for agencies and collaborated with talented
              people to create graphics/web products for both business and
              consumer use.
            </span>
          </Fade>
          <Fade direction="left" delay={200}>
            <span>
              I create successful responsive websites that are fast, easy to
              use, and built with best practices.
            </span>
          </Fade>
          <Fade direction="left" delay={300}>
            <span>
              The main area of my expertise is front-end development, HTML, CSS,
              JS, building small and medium web apps, animations, and coding
              interactive layouts.
            </span>
          </Fade>
          <Fade direction="left" delay={400}>
            <span>
              I also have full-stack developer experience with popular
              open-source CMS like (WordPress) .
            </span>
          </Fade>
          <Fade direction="left" delay={500}>
            <span>
              Visit my 
              <strong>
                <a
                  href="https://www.linkedin.com/in/oussama-malloud/"
                  target="_blank"
                >
                  	&nbsp;LinkedIn&nbsp;
                </a>
              </strong>
              profile for more details or just
              <strong>
                <a href="#contact">&nbsp;contact me</a>
              </strong>
              .
            </span>
          </Fade>
        </p>

        <div className="skills">
          <div className="skill">
            <Fade triggerOnce direction="up" delay={300}>
              <p>Front-end</p>
              <div>
                <span className="active-line"></span>
                <span className="inactive-line"></span>
              </div>
            </Fade>
          </div>

          <div className="skill">
            <Fade triggerOnce direction="up" delay={300}>
              <p>Graphic design</p>
              <div>
                <span className="active-line"></span>
                <span className="inactive-line"></span>
              </div>
            </Fade>
          </div>

          <div className="skill">
            <Fade triggerOnce direction="up" delay={300}>
              <p>React js</p>
              <div>
                <span className="active-line"></span>
                <span className="inactive-line"></span>
              </div>
            </Fade>
          </div>
          <Fades bottom>
            <a href="/Assets/oussamalloud_cv.pdf" className="bw-btn" download>
              <span>For more...</span>
            </a>
          </Fades>
        </div>
      </div>
    </section>
  );
}
