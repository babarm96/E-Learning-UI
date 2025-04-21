import React from 'react';
import './LearningSection.css';

const LearningSection = () => {
  return (
    <>
      <div
        className="learning-section text-white py-5"
        style={{
          backgroundImage: "url('/assets/images/hero-illustration.png')",
        }}
      >
        <div className="overlay">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Content */}
              <div className="col-md-6 mb-4 mb-md-0">
                <h1 className="display-4 fw-bold">Online learning platform</h1>
                <p className="lead mt-3">
                  Build skills with courses, certificates, and degrees online from world-class universities and companies
                </p>
                <button className="btn btn-warning fw-bold mt-3 px-4 py-2 animated-login-btn">Join For Free</button>
              </div>
              <div className="col-md-6 text-center d-none d-md-block"></div>
            </div>
          </div>
        </div>
      </div>

      {/* This will be placed at the bottom of learning section */}
      <div className="feature-wrapper">
        <div className="container">
          <div className="row feature-section justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="feature-box p-4 text-center h-100">
                <img src="/assets/icons/access-icon.svg" alt="Courses" className="feature-icon mb-3" />
                <h5 className="fw-bold">60+ UX courses</h5>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="feature-box p-4 text-center h-100">
                <img src="/assets/icons/instructor-icon.svg" alt="Expert instructors" className="feature-icon mb-3" />
                <h5 className="fw-bold">Expert instructors</h5>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="feature-box p-4 text-center h-100">
                <img src="/assets/icons/access-icon.svg" alt="Lifetime access" className="feature-icon mb-3" />
                <h5 className="fw-bold">Lifetime access</h5>
                <p>The automated process all your website tasks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningSection;
