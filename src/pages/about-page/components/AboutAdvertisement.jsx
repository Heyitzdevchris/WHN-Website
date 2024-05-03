import React from "react";
import './AboutAdvertisement.css';
import AboutWhnBackground from '../../../images/about-us-advertisement.jpeg';

export default function AboutAdvertisement() {
  return (
    <section className="about__hero" style={{backgroundImage: `url(${AboutWhnBackground})`}}>
      <div className="about__us__content">
        <h1 className="about__heading">About WHN Enterprise</h1>
        <p className="about__text">Take a look under the hood</p>
      </div>
    </section>
  );
};