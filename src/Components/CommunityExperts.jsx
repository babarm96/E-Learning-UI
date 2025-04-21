import React, { useState } from 'react';
import './CommunityExperts.css';

const experts = [
  {
    name: 'Mr. Saiful',
    image: '/assets/images/saiful.png',
    description: 'The automated process all your website tasks.',
  },
  {
    name: 'Mr. Urela',
    image: '/assets/images/urela.png',
    description: 'The automated process all your website tasks.',
  },
  {
    name: 'Mr. Uttom',
    image: '/assets/images/uttom.png',
    description: 'The automated process all your website tasks.',
  },
  {
    name: 'Mr. Shakil',
    image: '/assets/images/saiful.png',
    description: 'The automated process all your website tasks.',
  },
  {
    name: 'Mr. Arafat',
    image: '/assets/images/arafat.png',
    description: 'The automated process all your website tasks.',
  },
  {
    name: 'Mr. Nishad',
    image: '/assets/images/arafat.png',
    description: 'The automated process all your website tasks.',
  }
];

const CommunityExperts = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? experts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % experts.length);
  };

  const getVisibleExperts = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(experts[(index + i) % experts.length]);
    }
    return visible;
  };

  return (
    <div className="community-section container my-5 text-center">
      <h2 className="section-title mb-5 fw-semi-bold">Community Experts</h2>
      <div className="carousel-wrapper d-flex align-items-center justify-content-center position-relative">
        <button className="arrow-btn left-arrow" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="carousel-track d-flex justify-content-center align-items-center">
          {getVisibleExperts().map((expert, idx) => (
            <div key={idx} className="expert-card text-center mx-3">
              <img
                src={expert.image}
                alt={expert.name}
                className="expert-img"
              />
              <h5 className="mt-3 expert-name">{expert.name}</h5>
              <p className="expert-desc">{expert.description}</p>
            </div>
          ))}
        </div>
        <button className="arrow-btn right-arrow" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default CommunityExperts;
