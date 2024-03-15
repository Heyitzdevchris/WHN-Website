import React from "react";
import './AboutAdvertisement.css';
import AboutWhnBackground from '../../../images/about-us-advertisement.jpeg';

export default function AboutAdvertisement() {
  return (
    <section className="hero" style={{backgroundImage: `url(${AboutWhnBackground})`}}>
      <div className="about-us-content">
        <h1>About WHN Enterprise</h1>
        <p>Take a look under the hood</p>
      </div>
    </section>
  );
};