import React from 'react';
import HeliosModalImg from '../../../images/helios.jpeg';
import './HeliosModal.css';

export default function HeliosModal({open,onClose}) {
    if (!open) return true;

  return (
    <div onClick={onClose} className="overlay">
        <div onClick={(event) => {
            event.stopPropagation();
        }}className="heliosModalContainer">
            <img className='heliosModalImg' src={HeliosModalImg} alt="Red SUV Tesla" />
            <div className="heliosModalRight">
                <p onClick={onClose} className="heliosModalCloseBtn" style={{cursor: 'pointer'}}>X</p>
                <div className="heliosModalContent">
                    <h1 className='heliosModalHeading'>Meet "Helios"</h1>
                    <h3 className='heliosModalSubheading'>Features:</h3>
                    <ul className='heliosModalList'>
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
                    <h3 className='heliosModalSubheading'>Description:</h3>
                    <p className='heliosModalText'>
                        A pinnacle of progress and luxury encapsulated in the 2023 Multi-coat Red Tesla Model Y AWD Long Range. 
                        This vehicle transcends mere transportation, embodying elegance and the forefront of technology. With "Helios," 
                        your drive is transformed into an unparalleled experience, boasting advanced Autopilot capabilities and a premium 
                        all-black leather interior. Each journey is not just a route but a showcase of innovation and comfort.
                    </p>
                    <div className="heliosBtnContainer">
                        <button className="heliosReserveBtn">Reserve</button>
                        <button onClick={onClose} className="heliosCloseBtn">Back To Selection</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};