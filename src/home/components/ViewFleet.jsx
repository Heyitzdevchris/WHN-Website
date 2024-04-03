import React from 'react';
import { Link } from 'react-router-dom';
import './ViewFleet.css';


export default function ViewFleet() {
  return (
    <div className="view-fleet-container">
        <div className='view-fleet-heading'>
            <h1>Find Your Drive</h1>
            <p>Car rentals from WHN Enterprise</p>
        </div>
        <div className="view-fleet-btn-section">
            <Link to='/fleet'>
                <button className="view-fleet-btn">
                    Browse Fleet
                </button>
            </Link>
        </div>
    </div>
  );
};

