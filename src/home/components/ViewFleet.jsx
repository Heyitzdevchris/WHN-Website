import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TeslaDriving from '../../videos/tesla-driving-homepage.mp4';
import './ViewFleet.css';

export default function ViewFleet() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // 50% of the video needs to be in the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, options);

    observer.observe(video);

    // Cleanup observer
    return () => {
      observer.unobserve(video);
    };
  }, []);

  return (
    <div className="view__fleet__container">
        <div className='view__fleet__content'>
            <h1 className='view__fleet__title'>Explore Your Drive</h1>
            <p className='view__fleet__description'>Car rentals from WHN Enterprise</p>
            <Link to='/fleet'>
                <button className="view__fleet__btn">
                    Browse Fleet
                </button>
            </Link>
        </div>
        <video ref={videoRef} className='tesla__video' muted autoPlay loop playsInline>
            <source src={TeslaDriving} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
  );
}


