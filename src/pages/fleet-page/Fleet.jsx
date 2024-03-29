import React from 'react';
// import { Link } from 'react-router-dom';
import ScionImg from '../../images/scion.jpg';
import HeliosImg from '../../images/helioshomepage.jpg';
import StormTrooperImg from '../../images/stormtrooper.jpg';
import WhiteNoiseImg from '../../images/whitenoise.jpg';
import TesiImg from '../../images/tesi.jpg';
import './Fleet.css';


export default function Fleet() {
  return (
    <div className="fleet-container">
        {/* <h1>View The Fleet</h1> */}
        <div className="card__container">
            <article className="card__article">
                <img src={ScionImg} alt="White Scion TC" className="card__img" />
                <div className="card__data">
                    <span className="card__description">Meet "Old Faithful"</span>
                    <h2 className="card__title">2012 Scion TC</h2>
                    <a href="/fleet" className="card__button">Read More</a>
                </div>
            </article>
            <article className="card__article">
                <img src={HeliosImg} alt="Red Tesla Sedan" className="card__img" />
                <div className="card__data">
                    <span className="card__description">Meet "Helios"</span>
                    <h2 className="card__title">2023 Tesla Model Y</h2>
                    <a href="/fleet" className="card__button">Read More</a>
                </div>
            </article>
            <article className="card__article">
                <img src={StormTrooperImg} alt="White Telsa Sedan" className="card__img" />
                <div className="card__data">
                    <span className="card__description">Meet "White Noise"</span>
                    <h2 className="card__title">2023 Tesla Model Y</h2>
                    <a href="/fleet" className="card__button">Read More</a>
                </div>
            </article>
            <article className="card__article">
                <img src={WhiteNoiseImg} alt="White Tesla SUV" className="card__img" />
                <div className="card__data">
                    <span className="card__description">Meet "Stormtrooper"</span>
                    <h2 className="card__title">2020 Tesla Model 3</h2>
                    <a href="/fleet" className="card__button">Read More</a>
                </div>
            </article>
            <article className="card__article">
                <img src={TesiImg} alt="White Tesla White Rimmed SUV" className="card__img" />
                <div className="card__data">
                    <span className="card__description">Meet "Tesi"</span>
                    <h2 className="card__title">2021 Tesla Model Y</h2>
                    <a href="/fleet" className="card__button">Read More</a>
                </div>
            </article>
        </div>
    </div>
  );
};

