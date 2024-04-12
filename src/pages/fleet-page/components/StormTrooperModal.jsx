import React from 'react';
import StormTrooperImg from '../../../images/stormTrooper-fleet-modal.jpg';
import './StormTrooperModal.css';

export default function StormTrooperModal({open,onClose}) {
    if (!open) return true;

  return (
    <div onClick={onClose} className="overlay">
        <div onClick={(event) => {
            event.stopPropagation();
        }}className="stormTrooperModalContainer">
            <img className='stormTrooperModalImg' src={StormTrooperImg} alt="White Sedan Tesla" />
            <div className="stormTrooperModalRight">
                <p onClick={onClose} className="stormTrooperModalCloseBtn" style={{cursor: 'pointer'}}>X</p>
                <div className="stormTrooperModalContent">
                    <h1 className='stormTrooperModalHeading'>Meet "StormTrooper"</h1>
                    <h3 className='stormTrooperModalSubheading'>Features:</h3>
                    <ul className='stormTrooperModalList'>
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
                    </ul>
                    <h3 className='stormTrooperModalSubheading'>Description:</h3>
                    <p className='stormTrooperModalText'>
                        A symbol of elegance and innovation. This 2020 Pearl White Tesla Model 3 Performance merges style 
                        with efficiency, offering the full spectrum of Tesla's cutting-edge technology, including optional 
                        Full Self-Driving capabilities. From its premium black leather interior to its ceramic insulated tinted 
                        windows, every detail ensures your journey is not just a drive, but an experience.
                    </p>
                    <div className="stormTrooperBtnContainer">
                        <button className="cardButton" onClick={() => window.location.href = 'https://whnrentals.com/reservation?target_step=1&vehicle_class_id=1'}>
                            Reserve
                        </button>
                        <button onClick={onClose} className="stormTrooperCloseBtn">Back To Selection</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};