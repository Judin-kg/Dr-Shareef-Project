import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title fade-up">
          Dr. A M Shareef
        </h1>

        <h2 className="hero-typing">
          <span>Dental Surgeon</span>
          <span>Community Advocate</span>
          <span>BNI Executive Director</span>
        </h2>
      </div>
    </section>
  );
}
