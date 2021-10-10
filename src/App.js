import React, { useState, useEffect } from 'react'
import "./App.scss";
import {
  About,
  Skills,
  Work,
  Contact,
  Navbar,
  Sidebar,
  Footer,
  First,
} from "./components";

function App() {
  
  const [menu, setMenu] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => setTimeout(() => {
    setIsLoaded(false);
  }, 4000), []);
  if(isLoaded){
    return(
      <First />
    )
  }

  return (
    <div className="app">
      <div className="nav-section">
        <Navbar menu={menu} setMenu={setMenu} />
        <Sidebar menu={menu} setMenu={setMenu}/>
      </div>
      <div className="sections">
        <About />
        <Skills />
        <Work />
        <Contact />
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
