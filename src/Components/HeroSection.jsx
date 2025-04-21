import React from 'react';
import './HeroSection.css';
import { FaCheck, FaPlay } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="hero-section container d-flex align-items-center justify-content-between py-5">
      <div className="hero-text w-75">
        <div className="icon-circle mb-4">
          <img src="/assets/icons/graph-arrow.svg" alt="Arrow Icon" />
        </div>
        <h1 className="hero-heading mb-4">
          Learn new skills online with <br /> top educators
        </h1>
        <p className="hero-description mb-4">
          The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.
        </p>
        <ul className="hero-list list-unstyled">
          <li><FaCheck className="check-icon" /> Techniques to engage effectively with vulnerable children and young people.</li>
          <li><FaCheck className="check-icon" /> Join millions of people from around the world learning together.</li>
          <li><FaCheck className="check-icon" /> Online learning is as easy and natural.</li>
        </ul>
      </div>

      {/* Add YouTube Link to the Button */}
      <div className="hero-video-button">
        <a
          href="https://www.youtube.com/watch?v=up68UAfH0d0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="play-btn">
            <FaPlay />
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
