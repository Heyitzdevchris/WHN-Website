import React from 'react';
import WhiteNoiseImg from '../../../images/whiteNoise-fleet-modal.jpg';
import './WhiteNoiseModal.css';

export default function WhiteNoiseModal({open,onClose}) {
    if (!open) return true;

  return (
    <div onClick={onClose} className="overlay">
        <div onClick={(event) => {
            event.stopPropagation();
        }}className="whiteNoise__modal__container">
            <img className="whiteNoise__modal__img" src={WhiteNoiseImg} alt="White SUV Tesla" />
            <div className="whiteNoise__modal__right">
                <p onClick={onClose} className="whiteNoise__modal__closeBtn" style={{cursor: 'pointer'}}>X</p>
                <div className="whiteNoise__modal__content">
                    <h1 className="whiteNoise__modal__heading">Meet "White Noise"</h1>
                    <h3 className="whiteNoise__modal__subheading">Features:</h3>
                    <ul className="whiteNoise__modal__list">
                        <li>- Automatic Transmission</li>
                        <li>- All-Wheel Drive</li>
                        <li>- Backup Camera</li>
                        <li>- Blind Spot Warning</li>
                        <li>- Bluetooth</li>
                        <li>- GPS</li>
                        <li>- Heated Seats</li>
                        <li>- Keyless Entry</li>
                        <li>- USB Charger</li>
                        <li>- USB Input</li>
                        <li>- Sun Roof</li>
                        <li>- Toll Pass</li>
                        <li>- AUX Input</li>
                    </ul>
                    <h3 className="whiteNoise__modal__subheading">Description:</h3>
                    <p className="whiteNoise__modal__text">
                        A symbol of elegance and innovation. This 2023 Pearl White Tesla Model Y AWD Long Range merges style with efficiency, 
                        offering the full spectrum of Tesla's cutting-edge technology, including optional Full Self-Driving capabilities. From 
                        its premium black leather interior to its ceramic insulated tinted windows, every detail ensures your journey is not just 
                        a drive, but an experience.
                    </p>
                    <div className="whiteNoise__btnContainer">
                        <button className="reserve__btn" onClick={() => window.location.href = 'https://whnrentals.com/reservation?target_step=1&vehicle_class_id=4'}>
                            Reserve
                        </button>
                        <button onClick={onClose} className="whiteNoise__closeBtn">Back To Selection</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};