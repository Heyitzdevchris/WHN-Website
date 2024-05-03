import React from 'react';
import Helios__modal__img from '../../../images/helios.jpeg';
import './HeliosModal.css';

export default function HeliosModal({open,onClose}) {
    if (!open) return true;

  return (
    <div onClick={onClose} className="overlay">
        <div onClick={(event) => {
            event.stopPropagation();
        }}className="helios__modal__container">
            <img className="helios__modal__img" src={Helios__modal__img} alt="Red SUV Tesla" />
            <div className="helios__modal__right">
                <p onClick={onClose} className="helios__modal__closeBtn" style={{cursor: 'pointer'}}>X</p>
                <div className="helios__modal__content">
                    <h1 className="helios__modal__heading">Meet "Helios"</h1>
                    <h3 className="helios__modal__subheading">Features:</h3>
                    <ul className="helios__modal__list">
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
                        <li>- Panoramic Roof</li>
                        <li>- Leather Seats</li>
                        <li>- Autopilot</li>
                        <li>- 5-Star HGTSA Saftey Rating</li>
                    </ul>
                    <h3 className="helios__modal__subheading">Description:</h3>
                    <p className="helios__modal__text">
                        A pinnacle of progress and luxury encapsulated in the 2023 Multi-coat Red Tesla Model Y AWD Long Range. 
                        This vehicle transcends mere transportation, embodying elegance and the forefront of technology. With "Helios," 
                        your drive is transformed into an unparalleled experience, boasting advanced Autopilot capabilities and a premium 
                        all-black leather interior. Each journey is not just a route but a showcase of innovation and comfort.
                    </p>
                    <div className="helios__btnContainer">
                        <button className="helios__reserveBtn" onClick={() => window.location.href = 'https://whnrentals.com/reservation?target_step=1&vehicle_class_id=6'}>
                            Reserve
                        </button>
                        <button onClick={onClose} className="helios__closeBtn">Back To Selection</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};