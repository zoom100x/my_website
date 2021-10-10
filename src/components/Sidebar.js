import React, { useEffect } from "react";
import "./Sidebar.scss";


export default function Sidebar({ menu, setMenu }) {
  
  
  

  return (
    <nav className={!menu ? "sidebar inactive" : "sidebar"}>
      <ul className={menu && "active-items"}>
        <li>
          <a href="#about" id="anchor" onClick={()=> setMenu(!menu)}>
            <span className="first">AB</span>
            <img src="/Assets/Ma.png" alt="Oussama Malloud" width="50px" />
            <span>OUT</span>
          </a>
        </li>
        <li>
          <a href="#skills" id="anchor" onClick={()=> setMenu(!menu)}>
            <span className="first">SKI</span>
            <img src="/Assets/Ma.png" alt="Oussama Malloud" width="50px" />
            <span>LLS</span>
          </a>
        </li>
        <li>
          <a href="#work" id="anchor"  onClick={()=> setMenu(!menu)}>
            <span className="first">WO</span>
            <img src="/Assets/Ma.png" alt="Oussama Malloud" width="50px" />
            <span>RK</span>
          </a>
        </li>
        <li>
          <a href="#contact" id="anchor" onClick={()=> setMenu(!menu)}>
            <span className="first">CON</span>
            <img src="/Assets/Ma.png" alt="Oussama Malloud" width="50px" />
            <span>TACT</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
