import React from 'react';
import ScionImg from '../../../images/scion.jpeg';
import HeliosImg from '../../../images/helios.jpeg';
import StormTrooperImg from '../../../images/stormtrooper.jpg';
import WhiteNoiseImg from '../../../images/whitenoise.jpeg';
import './ViewFleet.css';


const ViewFleet = () => {
  return (
    <div className="container">
        <h1>View Our Fleet!</h1>
        <div className="card__container">
            <article className="card__article">
                <img src={ScionImg} alt="White Scion TC" className="card__img" />

                <div className="card__data">
                    <span className="card__description">Meet "Old Faithful".</span>
                    <h2 className="card__title">2012 Scion TC</h2>
                    <a href="#" className="card__button">Read More</a>
                </div>
            </article>
            <article className="card__article">
                <img src={HeliosImg} alt="Red Tesla Sedan" className="card__img" />

                <div className="card__data">
                    <span className="card__description">Introducing "Helios".</span>
                    <h2 className="card__title">2023 Tesla Model Y</h2>
                    <a href="#" className="card__button">Read More</a>
                </div>
            </article>
            <article className="card__article">
                <img src={StormTrooperImg} alt="White Telsa Sedan" className="card__img" />

                <div className="card__data">
                    <span className="card__description">Meet "White Noise".</span>
                    <h2 className="card__title">2023 Tesla Model Y</h2>
                    <a href="#" className="card__button">Read More</a>
                </div>
            </article>
            <article className="card__article">
                <img src={WhiteNoiseImg} alt="White Tesla SUV" className="card__img" />

                <div className="card__data">
                    <span className="card__description">Meet "Stormtrooper".</span>
                    <h2 className="card__title">2020 Tesla Model 3</h2>
                    <a href="#" className="card__button">Read More</a>
                </div>
            </article>
        </div>
        <button className='view-fleet-button'>View Fleet</button>
    </div>
  );
};

export default ViewFleet;
