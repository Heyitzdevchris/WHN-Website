import React from 'react';
import './AboutBio.css';
import AboutBioImg from '../../../images/about-us-bio1.jpg';

export default function AboutBio() {
  return (
    <div className='about-bio-wrap'>
        <div className="about-bio-content">
            <h1 className="bio-heading">Revolutionizing the Journey, Together</h1>
            <p className="bio-text">
                In the heart of WHN beats a revolutionary idea: a vehicle rental experience crafted with integrity, transparency, and a relentless pursuit of excellence. 
                Born from real stories of frustration and aspiration, we stand as a testament to the power of innovation — for hosts by hosts, for guests by guests. 
                Our foundation is built on the belief that excellence isn't just an outcome; it's a principle that guides every decision, every interaction and every moment.
            </p>
        </div>
        <img src={AboutBioImg} alt="" className="about-bio-photo" />
    </div>
  );
};
