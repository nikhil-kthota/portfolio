import React from 'react';
import '../styles/hero.css';

const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <div className="hero-left">
        <span className="hero-small">- WEB DEVELOPER <br/>- FRONTEND DEVELOPER <br/>
        - PROMPT ENGINEER <br/>- AI & ML ENTHUSIAST <br/>- SOFTWARE ENGINEER <br/></span>
      </div>
      <div className="hero-center">
        <span className="hero-in-the"></span>
         <div className="hero-circle" />
         <span className="hero-tagline">From 0→1, I design and build scalable and high-performing web applications.</span>
         <span className="hero-name">NIKHIL THOTA</span>
      </div>
      <div className="hero-right">
        <span className="hero-desc"><b>OPEN TO WORK </b><br/>BASED IN HYDERABAD</span>
      </div>
    </div>
  </section>
);

export default Hero;
