import React, { useState } from 'react';
import FleetPageAdImg from '../../images/fleetPageAd.jpg';
import ScionImg from '../../images/scion.jpg';
import HeliosImg from '../../images/helioshomepage.jpg';
import StormTrooperImg from '../../images/stormtrooper.jpg';
import WhiteNoiseImg from '../../images/whitenoise.jpg';
import TesiImg from '../../images/tesi.jpg';
import './Fleet.css';
// Modal Images
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
        <div className='fleet__hero' style={{backgroundImage: `url(${FleetPageAdImg})`}}>
            <div className="fleet__ad__content">
                <h1 className="fleet__ad__heading">Experience WHN's Fleet Selection</h1>
                <p className="fleet__ad__text">Find Your Perfect Drive</p>
            </div>
        </div>
        <div className="fleet__container">
            <ScionModal open={openScion} onClose={() => setOpenScionModal(false)} />
            <HeliosModal open={openHelios} onClose={() => setOpenHeliosModal(false)} />
            <WhiteNoiseModal open={openWhiteNoise} onClose={() => setOpenWhiteNoiseModal(false)} />
            <StormTrooperModal open={openStormTrooper} onClose={() => setOpenStormTrooperModal(false)} />
            <TesiModal open={openTesi} onClose={() => setOpenTesiModal(false)} />
            <div className="card__container">
                <article className="card__article">
                    <img src={ScionImg} alt="White Scion TC" className="card__img" />
                    <div className="card__data">
                        <span className="card__description">Meet "Old Faithful"</span>
                        <h2 className="card__title">2012 Scion TC</h2>
                        <button className="card__btn" onClick={() => setOpenScionModal(true)}>
                            Read More
                        </button>
                        <button className="card__btn" onClick={() => window.location.href = 'https://whnrentals.com/reservation?target_step=1&vehicle_class_id=7'}>
                            Reserve Now
                        </button>
                    </div>
                </article>
                <article className="card__article">
                    <img src={HeliosImg} alt="Red Tesla Sedan" className="card__img" />
                    <div className="card__data">
                        <span className="card__description">Meet "Helios"</span>
                        <h2 className="card__title">2023 Tesla Model Y</h2>
                        <button className="card__btn" onClick={() => setOpenHeliosModal(true)}>
                            Read More
                        </button>
                        <button className="card__btn" onClick={() => window.location.href = 'https://whnrentals.com/reservation?target_step=1&vehicle_class_id=6'}>
                            Reserve Now
                        </button>
                    </div>
                </article>
                <article className="card__article">
                    <img src={WhiteNoiseImg} alt="White Telsa SUV" className="card__img" />
                    <div className="card__data">
                        <span className="card__description">Meet "White Noise"</span>
                        <h2 className="card__title">2023 Tesla Model Y</h2>
                        <button className="card__btn" onClick={() => setOpenWhiteNoiseModal(true)}>
                            Read More
                        </button>
                        <button className="card__btn" onClick={() => window.location.href = 'https://whnrentals.com/reservation?target_step=1&vehicle_class_id=4'}>
                            Reserve Now
                        </button>
                    </div>
                </article>
                <article className="card__article">
                    <img src={StormTrooperImg} alt="White Tesla Sedan" className="card__img" />
                    <div className="card__data">
                        <span className="card__description">Meet "Stormtrooper"</span>
                        <h2 className="card__title">2020 Tesla Model 3</h2>
                        <button className="card__btn" onClick={() => setOpenStormTrooperModal(true)}>
                            Read More
                        </button>
                        <button className="card__btn" onClick={() => window.location.href = 'https://whnrentals.com/reservation?target_step=1&vehicle_class_id=1'}>
                            Reserve Now
                        </button>
                    </div>
                </article>
                <article className="card__article">
                    <img src={TesiImg} alt="White Tesla White Rimmed SUV" className="card__img" />
                    <div className="card__data">
                        <span className="card__description">Meet "Tesi"</span>
                        <h2 className="card__title">2021 Tesla Model Y</h2>
                        <button className="card__btn" onClick={() => setOpenTesiModal(true)}>
                            Read More
                        </button>
                        <button className="card__btn" onClick={() => window.location.href = 'https://whnrentals.com/reservation?target_step=1&vehicle_class_id=3'}>
                            Reserve Now
                        </button>
                    </div>
                </article>
            </div>
        </div>
    </section>
  );
};

