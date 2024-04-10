import React from 'react';
import './HqHomepageForm.css';

export default function HqHomepageForm() {
  return (
    <div className="hq-rental-software-integration-homepage">
        <iframe 
          src="https://whn-enterprises-llc.whnrentals.com/public/car-rental/reservations/embed?brand=ao0x2buz-ndyt-o4xl-pmcd-cclemcfyfp19&new=true&reservation_page=https%3A%2F%2Fwhnrentals.com%2Freservation"
          title="Homepage Form"
          width="1200"
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
