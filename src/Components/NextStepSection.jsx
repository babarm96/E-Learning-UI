import React from 'react';
import './NextStepSection.css'; // Custom CSS

const NextStepSection = () => {
  return (
    <div className="container my-5 next-step-section">
      <div className="row align-items-center bg-white ">
        {/* Left image */}
        <div className="col-md-6 p-0">
          <img
            src="/assets/images/coding.png" // Replace with your path
            alt="Person coding with headphones"
            className="img-fluid h-100 w-100 object-fit-cover"
          />
        </div>

        {/* Right content */}
        <div className="col-md-6 py-5 ps-5 ">
          <h2 className="fw-semi-bold mb-4 text-primary next-step-title">
            Take the next step <br />
            toward your personal <br />
            and professional goals <br />
            with us.
          </h2>
          <p className="text-secondary mb-4 fs-6 fw-medium h6 pe-5">
            The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people.
          </p>

          <button className="btn btn-orange animated-nextStep-btn px-4 py-2 fw-semibold rounded-3">
  Join Now For Free
</button>
        
        </div>
      </div>
    </div>
  );
};

export default NextStepSection;
