import React from 'react';
import WhiteNoiseImg from '../../../images/whiteNoise-fleet-modal.jpg';
import './WhiteNoiseModal.css';

export default function WhiteNoiseModal({open,onClose}) {
    if (!open) return true;

  return (
    <div onClick={onClose} className="overlay">
        <div onClick={(event) => {
            event.stopPropagation();
        }}className="whiteNoiseModalContainer">
            <img className='whiteNoiseModalImg' src={WhiteNoiseImg} alt="White SUV Tesla" />
            <div className="whiteNoiseModalRight">
                <p onClick={onClose} className="whiteNoiseModalCloseBtn" style={{cursor: 'pointer'}}>X</p>
                <div className="whiteNoiseModalContent">
                    <h1 className='whiteNoiseModalHeading'>Meet "White Noise"</h1>
                    <h3 className='whiteNoiseModalSubheading'>Features:</h3>
                    <ul className='whiteNoiseModalList'>
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
                    <h3 className='whiteNoiseModalSubheading'>Description:</h3>
                    <p className='whiteNoiseModalText'>
                        A symbol of elegance and innovation. This 2023 Pearl White Tesla Model Y AWD Long Range merges style with efficiency, 
                        offering the full spectrum of Tesla's cutting-edge technology, including optional Full Self-Driving capabilities. From 
                        its premium black leather interior to its ceramic insulated tinted windows, every detail ensures your journey is not just 
                        a drive, but an experience.
                    </p>
                    <div className="whiteNoiseBtnContainer">
                        <button className="cardButton" onClick={() => window.location.href = 'https://whnrentals.com/reservation?target_step=1&vehicle_class_id=4'}>
                            Reserve
                        </button>
                        <button onClick={onClose} className="whiteNoiseCloseBtn">Back To Selection</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};