import React from 'react';

const cardsData = [
  {
    imageSrc: "/assets/icons/access-icon.svg",
    title: "60+ UX courses",
    description: "The automated process all your website tasks."
  },
  {
    imageSrc: "/assets/icons/instructor-icon.svg",
    title: "Expert instructors",
    description: "The automated process all your website tasks."
  },
  {
    imageSrc: "/assets/icons/access-icon.svg",
    title: "Lifetime access",
    description: "The automated process all your website tasks."
  }
];

const Cards = () => {
  return (
    <div className='pt-5'>
      <div className="feature-wrapper mt-5">
        <div className="container">
          <div className="row feature-section justify-content-center">
            {cardsData.map((card, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="feature-box p-4 text-center h-100">
                  <img src={card.imageSrc} alt={card.title} className="feature-icon mb-3" />
                  <h5 className="fw-bold">{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
