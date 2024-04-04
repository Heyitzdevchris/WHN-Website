import React from 'react';
import WhiteNoiseImg from '../../../images/whiteNoise-fleet-modal.jpg';
import './WhiteNoiseModal.css';

export default function WhiteNoiseModal({open,onClose}) {
    if (!open) return true;

  return (
    <div onClick={onClose} className="overlay">
        <div onClick={(event) => {
            event.stopPropagation();
        }}className="modalContainer">
            <img className='modalImg' src={WhiteNoiseImg} alt="White SUV Tesla" />
            <div className="modalRight">
                <p onClick={onClose} className="modalCloseBtn" style={{cursor: 'pointer'}}>X</p>
                <div className="modalContent">
                    <h1 className='modalHeading'>Meet "White Noise"</h1>
                    <h3 className='modalSubheading'>Features:</h3>
                    <ul className='modalList'>
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
                    <h3 className='modalSubheading'>Description:</h3>
                    <p className='modalText'>
                        A symbol of elegance and innovation. This 2023 Pearl White Tesla Model Y AWD Long Range merges style with efficiency, 
                        offering the full spectrum of Tesla's cutting-edge technology, including optional Full Self-Driving capabilities. From 
                        its premium black leather interior to its ceramic insulated tinted windows, every detail ensures your journey is not just 
                        a drive, but an experience.
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