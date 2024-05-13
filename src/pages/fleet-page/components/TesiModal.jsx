import React from 'react';
import TesiModalImg from '../../../images/tesi-fleet-modal.jpg';
import './TesiModal.css';

export default function TesiModal({open,onClose}) {
    if (!open) return true;

  return (
    <div onClick={onClose} className="overlay">
        <div onClick={(event) => {
            event.stopPropagation();
        }}className="tesi__modal__container">
            <img className="tesi__modal__img" src={TesiModalImg} alt="White Tesla White Rimmed SUV" />
            <div className="tesi__modal__right">
                <p onClick={onClose} className="tesi__modal__closeBtn" style={{cursor: 'pointer'}}>X</p>
                <div className="tesi__modal__content">
                    <h1 className="tesi__modal__heading">Meet "Tesi"</h1>
                    <h3 className="tesi__modal__subheading">Features:</h3>
                    <ul className="tesi__modal__list">
                        <li>- Automatic Transmission</li>
                        <li>- All-Wheel Drive</li>
                        <li>- Backup Camera</li>
                        <li>- Blind Spot Warning</li>
                        <li>- Bluetooth</li>
                        <li>- GPS</li>
                        <li>- Heated Seats</li>
                        <li>- Keyless Entry</li>
                        <li>- USB Charger</li>
                        <li>- Sun Roof</li>
                        <li>- Toll Pass</li>
                    </ul>
                    <h3 className="tesi__modal__subheading">Description:</h3>
                    <p className="tesi__modal__text">
                        A beacon of innovation and luxury in the world of electric SUVs. This 2021 Multi-coat White Tesla 
                        Model Y AWD Long Range redefines what it means to drive smartly and stylishly. Equipped with cutting-
                        edge Autopilot capabilities, "Tesi" is not just a vehicle; it's your partner on the road. Immerse 
                        yourself in a driving experience that blends advanced technology with unparalleled comfort and safety.
                    </p>
                    <div className="tesi__btnContainer">
                        <button className="reserveBtn" onClick={() => window.location.href = 'https://whnrentals.com/reservation?target_step=1&vehicle_class_id=3'}>
                            Reserve
                        </button>
                        <button onClick={onClose} className="tesi__closeBtn">Back To Selection</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};