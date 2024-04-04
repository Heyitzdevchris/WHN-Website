import React from 'react';
import ScionModalImg from '../../../images/scion-fleet-modal.jpg';
import './ScionModal.css';

export default function ScionModal({open,onClose}) {
    if (!open) return true;

  return (
    <div onClick={onClose} className="overlay">
        <div onClick={(event) => {
            event.stopPropagation();
        }}className="modalContainer">
            <img className='modalImg' src={ScionModalImg} alt="White Scion TC On Dirt Road" />
            <div className="modalRight">
                <p onClick={onClose} className="modalCloseBtn" style={{cursor: 'pointer'}}>X</p>
                <div className="modalContent">
                    <h1 className='modalHeading'>Meet "Old Faithful"</h1>
                    <h3 className='modalSubheading'>Features:</h3>
                    <ul className='modalList'>
                        <li>- Automatic Transmission</li>
                        <li>- Bluetooth</li>
                        <li>- Keyless Entry</li>
                        <li>- Sunroof</li>
                        <li>- USB Input</li>
                        <li>- AUX Input</li>
                        <li>- Long-Term Car</li>
                        <li>- USB Charger</li>
                    </ul>
                    <h3 className='modalSubheading'>Description:</h3>
                    <p className='modalText'>your perfect companion for navigating the local scene with ease and comfort. 
                        This Scion TC is not just any commuter car; it's your ticket to a seamless and economical journey amidst 
                        rising gas prices. Crafted for comfort, its spacious seats welcome passengers into a haven of relaxation. 
                        At the same time, the ceramic tint on the windows ensures the cabin remains cool, shielding you from the heat outside.
                    </p>
                    <div className="btnContainer">
                        <button className="reserveBtn">Reserve</button>
                        <button onClick={onClose} className="closeBtn">Back To Selection</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
