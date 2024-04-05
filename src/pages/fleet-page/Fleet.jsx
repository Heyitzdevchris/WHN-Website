import React, { useState } from 'react';
import FleetPageAdImg from '../../images/fleetPageAd.jpg';
import ScionImg from '../../images/scion.jpg';
import HeliosImg from '../../images/helioshomepage.jpg';
import StormTrooperImg from '../../images/stormtrooper.jpg';
import WhiteNoiseImg from '../../images/whitenoise.jpg';
import TesiImg from '../../images/tesi.jpg';
import './Fleet.css';

import ScionModal from './components/ScionModal';
import HeliosModal from './components/HeliosModal';
import WhiteNoiseModal from './components/WhiteNoiseModal';
import StormTrooperModal from './components/StormTrooperModal';
import TesiModal from './components/TesiModal';


export default function Fleet() {
    // All Modal States
    const [openScion, setOpenScionModal] = useState(false);
    const [openHelios, setOpenHeliosModal] = useState(false);
    const [openWhiteNoise, setOpenWhiteNoiseModal] = useState(false);
    const [openStormTrooper, setOpenStormTrooperModal] = useState(false);
    const [openTesi, setOpenTesiModal] = useState(false); 

  return (
    <section>
        <div className='fleetHero' style={{backgroundImage: `url(${FleetPageAdImg})`}}>
            <div className="fleetAdContent">
                <h1 className="fleetAdHeading">Experience WHN's Fleet Selection</h1>
                <p className="fleetAdText">Find Your Perfect Drive</p>
            </div>
        </div>
        <div className="fleetContainer">
            <ScionModal open={openScion} onClose={() => setOpenScionModal(false)} />
            <HeliosModal open={openHelios} onClose={() => setOpenHeliosModal(false)} />
            <WhiteNoiseModal open={openWhiteNoise} onClose={() => setOpenWhiteNoiseModal(false)} />
            <StormTrooperModal open={openStormTrooper} onClose={() => setOpenStormTrooperModal(false)} />
            <TesiModal open={openTesi} onClose={() => setOpenTesiModal(false)} />
            <div className="cardContainer">
                <article className="cardArticle">
                    <img src={ScionImg} alt="White Scion TC" className="cardImg" />
                    <div className="cardData">
                        <span className="cardDescription">Meet "Old Faithful"</span>
                        <h2 className="cardTitle">2012 Scion TC</h2>
                        <button className="cardButton" onClick={() => setOpenScionModal(true)}>
                            Read More
                        </button>
                        <button className="cardButton" onClick={() => window.location.href = 'https://whnrentals.com/reservation?target_step=1&vehicle_class_id=7'}>
                            Reserve Now
                        </button>
                    </div>
                </article>
                <article className="cardArticle">
                    <img src={HeliosImg} alt="Red Tesla Sedan" className="cardImg" />
                    <div className="cardData">
                        <span className="cardDescription">Meet "Helios"</span>
                        <h2 className="cardTitle">2023 Tesla Model Y</h2>
                        <button className="cardButton" onClick={() => setOpenHeliosModal(true)}>Read More</button>
                        <button className="cardButton">Reserve Now</button>
                    </div>
                </article>
                <article className="cardArticle">
                    <img src={WhiteNoiseImg} alt="White Telsa SUV" className="cardImg" />
                    <div className="cardData">
                        <span className="cardDescription">Meet "White Noise"</span>
                        <h2 className="cardTitle">2023 Tesla Model Y</h2>
                        <button className="cardButton" onClick={() => setOpenWhiteNoiseModal(true)}>Read More</button>
                        <button className="cardButton">Reserve Now</button>
                    </div>
                </article>
                <article className="cardArticle">
                    <img src={StormTrooperImg} alt="White Tesla Sedan" className="cardImg" />
                    <div className="cardData">
                        <span className="cardDescription">Meet "Stormtrooper"</span>
                        <h2 className="cardTitle">2020 Tesla Model 3</h2>
                        <button className="cardButton" onClick={() => setOpenStormTrooperModal(true)}>Read More</button>
                        <button className="cardButton">Reserve Now</button>
                    </div>
                </article>
                <article className="cardArticle">
                    <img src={TesiImg} alt="White Tesla White Rimmed SUV" className="cardImg" />
                    <div className="cardData">
                        <span className="cardDescription">Meet "Tesi"</span>
                        <h2 className="cardTitle">2021 Tesla Model Y</h2>
                        <button className="cardButton" onClick={() => setOpenTesiModal(true)}>Read More</button>
                        <button className="cardButton">Reserve Now</button>
                    </div>
                </article>
            </div>
        </div>
    </section>
  );
};

