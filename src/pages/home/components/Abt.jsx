import React from 'react'
import AboutUsImage from '../../../images/about-us.jpeg';
import './Abt.css';

const Abt = () => {
  return (
    <div className="about-wrap">
      <img src={AboutUsImage} alt="White Conference Room" className="about-photo" />
      <div className="about-content">
        <h1>About Us</h1>
        <div className='about-text'>
        <p>At WHN, we've torn down the veil of nebulous transaction processes to build something revolutionary. 
          Our foundation is built on the solid ground of transparency, equity, and mutual respect. 
          We are a coalition of military veterans, hosts, and renters united by shared values and diverse experiences. 
          Together, we're crafting a rental experience prioritizing clear communication, fair treatment, and genuine care for everyone involved.</p>
        </div>
        <button className='about-btn'>Learn More</button>
      </div>
    </div>
  );
};

export default Abt;
