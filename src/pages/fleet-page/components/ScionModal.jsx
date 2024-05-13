import React from 'react';
import ScionModalImg from '../../../images/scion-fleet-modal.jpg';
import './ScionModal.css';

export default function ScionModal({open,onClose}) {
    if (!open) return true;

  return (
    <div onClick={onClose} className="overlay">
        <div onClick={(event) => {
            event.stopPropagation();
        }}className="scion__modal__container">
            <img className="scion__modal__img" src={ScionModalImg} alt="White Scion TC On Dirt Road" />
            <div className="scion__modal__right">
                <p onClick={onClose} className="scion__modal__closeBtn" style={{cursor: 'pointer'}}>X</p>
                <div className="scion__modal__content">
                    <h1 className="scion__modal__heading">Meet "Old Faithful"</h1>
                    <h3 className="scion__modal__subheading">Features:</h3>
                    <ul className="scion__modal__list">
                        <li>- Automatic Transmission</li>
                        <li>- Bluetooth</li>
                        <li>- Keyless Entry</li>
                        <li>- Sunroof</li>
                        <li>- USB Input</li>
                        <li>- AUX Input</li>
                        <li>- Long-Term Car</li>
                        <li>- USB Charger</li>
                    </ul>
                    <h3 className='scion__modal__subheading'>Description:</h3>
                    <p className='scion__modal__text'>your perfect companion for navigating the local scene with ease and comfort. 
                        This Scion TC is not just any commuter car; it's your ticket to a seamless and economical journey amidst 
                        rising gas prices. Crafted for comfort, its spacious seats welcome passengers into a haven of relaxation. 
                        At the same time, the ceramic tint on the windows ensures the cabin remains cool, shielding you from the heat outside.
                    </p>
                    <div className="scion__btnContainer">
                        <button className="reserve__btn" onClick={() => window.location.href = 'https://whnrentals.com/reservation?target_step=1&vehicle_class_id=7'}>
                            Reserve
                        </button>
                        <button onClick={onClose} className="scion__closeBtn">Back To Selection</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
