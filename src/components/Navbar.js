import React, { useState, useEffect, useRef } from "react";
import "./Navbar.scss";
import { gsap } from "gsap";

export default function Navbar({ menu, setMenu }) {
  useEffect(() => {
    gsap.to(".nav-container", {
      y: "0%",
      opacity: 1,
      duration: 0.5,
      delay: 0.2,
    });
  }, []);

  const navItem = useRef();

  const menuHandler = () => {
    setMenu(!menu);
  };

  return (
    <div className="nav-container">
      <div className="logo-container">
        <a href="/">
          <img src="/Assets/oussaMAlloud.png" alt="Oussama Malloud" />
        </a>
        <a href="/">
          <img className="img2" src="/Assets/Ma.png" alt="Oussama Malloud" />
        </a>
      </div>
      <div className="nav">
        <div ref={navItem} className="nav-item">
          <ul className={!menu && "hide-menu"}>
            <li>
              <a href="#about" onClick={()=> setMenu(!menu)}>
                <span className="first">AB</span>
                <img src="/Assets/Ma.png" alt="Oussama Malloud" width="40px" />
                <span>OUT</span>
              </a>
            </li>
            <li>
              <a href="#skills" onClick={()=> setMenu(!menu)}>
                <span className="first">SKI</span>
                <img src="/Assets/Ma.png" alt="Oussama Malloud" width="40px" />
                <span>LLS</span>
              </a>
            </li>
            <li>
              <a href="#work" onClick={()=> setMenu(!menu)}>
                <span className="first">WO</span>
                <img src="/Assets/Ma.png" alt="Oussama Malloud" width="40px" />
                <span>RK</span>
              </a>
            </li>
            <li>
              <a href="#contact" onClick={()=> setMenu(!menu)}>
                <span className="first">CON</span>
                <img src="/Assets/Ma.png" alt="Oussama Malloud" width="40px" />
                <span>TACT</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className={menu ? "menu-icon active-menu" : "menu-icon"}
          onClick={menuHandler}
        >
          <span className="line1"></span>
          <span className="line2"></span>
        </div>
      </div>
    </div>
  );
}
