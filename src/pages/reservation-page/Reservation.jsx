import React from 'react'
import './Reservation.css';

export default function Reservation() {
  return (
    <div className="hq-rental-software-integration">
        <iframe
          src="https://whn-enterprises-llc.whnrentals.com/public/car-rental/reservations/recover-last-booking?brand_uuid=ao0x2buz-ndyt-o4xl-pmcd-cclemcfyfp19"
          title="Reservation Engine"
          width="100%"
          height="800"
          frameBorder="0"
          crossOrigin="anonymous"
        ></iframe>
        <script 
            src="https://whn-enterprises-llc.whnrentals.com/public/car-rental/integrations/assets/integrator"
            type="text/javascript"
        ></script>
    </div>
  );
};
