import React from "react";
import "./Footer.scss";
import { Fade } from "react-awesome-reveal";

export default function Footer() {
  return (
    
    <div className="footer-container">
      <hr color="#000" size="1" />
      <Fade delay={300}>
      <img src="/Assets/Ma.png" alt="oussama malloud front-end developer" />
      </Fade>
      <h2>Have a project, idea or just want to chat? Drop me an email!</h2>
      <Fade delay={300}>
      <div className="email-container">
          <a href="mailto:malloud321@gmail.com">malloud321@gmail.com</a>
      </div>
      </Fade>
      <Fade delay={300}>
      <ul>
          <li> <a href="https://www.linkedin.com/in/oussama-malloud/" target="_blank">Linkedin</a></li>
          <li><a href="https://www.instagram.com/zoom_in100x/" target="_blank">Instagram</a></li>
          <li><a href="https://github.com/malloudMa" target="_blank">Github</a></li>
      </ul>
      </Fade>
    </div>
    
  );
}
