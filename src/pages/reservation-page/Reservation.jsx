import React from 'react'
import './Reservation.css';

export default function Reservation() {
  return (
    <div className="hq-rental-software-integration">
        <iframe
            src="https://whn-enterprises-llc.whnrentals.com/public/car-rental/integrations"
            title="Reservation Engine"
            width="100%"
            height="1000"
            frameBorder="0"
            crossOrigin="annonymous"
        ></iframe>
        <script 
            src="https://whn-enterprises-llc.whnrentals.com/public/car-rental/integrations/assets/integrator"
            type="text/javascript"
        ></script>
    </div>
  );
};
