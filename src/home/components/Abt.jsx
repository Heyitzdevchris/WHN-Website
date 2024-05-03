import React from 'react'
import { Link } from 'react-router-dom';
import AboutUsImage from '../../images/about-us-homepage.jpeg';
import './Abt.css';

const Abt = () => {
  return (
    <div className="abt__wrap">
      <img src={AboutUsImage} alt="White Conference Room" className="abt__photo" />
      <div className="abt__content">
        <h1 className='abt__heading'>About Us</h1>
        <div className='abt__text'>
        <p>At WHN, we've torn down the veil of nebulous transaction processes to build something revolutionary. 
          Our foundation is built on the solid ground of transparency, equity, and mutual respect. 
          We are a coalition of military veterans, hosts, and renters united by shared values and diverse experiences. 
          Together, we're crafting a rental experience prioritizing clear communication, fair treatment, and genuine care for everyone involved.</p>
        </div>
        <Link to="/about">
        <button className='abt__btn'>Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default Abt;
