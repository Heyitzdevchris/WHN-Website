import React from 'react';
import './Advertisement.css';
import BackgroundImage from '../../images/background.jpg';
import HqHomepageForm from './HqHomepageForm';

const Advertisement = () => {
    return (
        <section className="hero" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="advertisement-content" style={{paddingTop: '300px'}}>
                <h1>The WHN Experience</h1>
                <p>Excellence By Design</p>
                <HqHomepageForm />
            </div>
        </section>
    );
};

export default Advertisement;



