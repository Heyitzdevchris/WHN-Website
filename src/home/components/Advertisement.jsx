import React from 'react';
import './Advertisement.css';
import BackgroundImage from '../../images/background.jpg'

const Advertisement = () => {
    return (
        <section className="hero" style={{backgroundImage: `url(${BackgroundImage})`}}>
            <div className="advertisement-content">
                <h1>The WHN Experience</h1>
                <p>Excellence By Design</p>
            </div>
        </section>
    );
};

export default Advertisement;



