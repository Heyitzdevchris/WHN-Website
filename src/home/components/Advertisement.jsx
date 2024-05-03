import React from 'react';
import './Advertisement.css';
import BackgroundImage from '../../images/background.jpg';
import HqHomepageForm from './HqHomepageForm';

const Advertisement = () => {
    return (
        <section className="advertisement__hero" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="advertisement__content">
                <h1 className='advertisement__heading'>The WHN Experience</h1>
                <p className='advertisement__text'>Excellence By Design</p>
                <HqHomepageForm />
            </div>
        </section>
    );
};

export default Advertisement;



