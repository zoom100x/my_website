import React, { useRef, useEffect } from "react";
import "./First.scss";
import gsap from "gsap";

export default function First() {
  const title = useRef();
  const container = useRef();
  useEffect(() => {
    gsap.to(title.current, {
      y: "-50px",
      x: "50px",
      opacity: 0,
      duration: 0.5,
      delay: 3,
    });
    gsap.to(container.current, { opacity: 0, duration: 1, delay: 3 });
  }, []);

  return (
    <div ref={container} className="load-container">
      <div className="hi-container">
        <h1 ref={title} className="inset-text">
          Hi
        </h1>
      </div>
    </div>
  );
}
