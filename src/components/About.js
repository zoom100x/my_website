import React, { useEffect, useRef, useLayoutEffect } from "react";
import "./About.scss";
import Flip from "react-reveal/Flip";
import Pulse from "react-reveal/Pulse";
import { Fade, Zoom } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="bg-text-container">
        <Flip top cascade>
          <span>OUSSAMA MALLOUD OUSSAMA</span>
          <span>MALLOUD OUSSAMA MALLOUD</span>
          <span>OUSSAMA MALLOUD OUSSAMA</span>
          <span>MALLOUD OUSSAMA MALLOUD</span>
        </Flip>
      </div>
      <section className="info-container">
        
          <div className="my-img">
          <Fade direction="left" delay={300} style={{width:"100%"}}>
            <img src="/Assets/My_pic/1.jpg" alt="oussama malloud" />
          </Fade>
          </div>
        
        <div className="text-container">
          <Fade delay={300}>
            <p className="text1">Hi I'm OUSSAMA</p>
          </Fade>
          <Fade delay={300}>
            <p className="text2">
              A designer who works with startups looking to push creative
              boundaries and create unique user experiences.
            </p>
          </Fade>
          <Pulse>
            <a href="#contact" className="bw-btn">
              <span>Contact me!</span>
            </a>
          </Pulse>
        </div>
      </section>
    </section>
  );
};

export default About;
