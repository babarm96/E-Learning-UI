import React from "react";
import "./LearnerOutcomes.css";

const LearnerOutcomes = () => {
  return (
    <section className="learner-section py-4 mt-4">
      <div className="container">
        <div className="row align-items-center flex-column flex-md-row">
          {/* Left Side - Image */}
          <div className="col-md-6 text-center ">
            <img src="/assets/images/meeting.png" alt="Learner Meeting" className="img-fluid" />
          </div>

          {/* Right Side - Text */}
          <div className="col-md-6 mt-4 mt-md-0 ">
            <h2 className="outcomes-heading text-primary fw-semibold">
              Learner outcomes on <br />
              courses you will take
            </h2>
            <ul className="outcomes-list list-unstyled mt-4">
              <li>
                <i className="bi bi-check-circle-fill text-warning me-2" />
                Techniques to engage effectively with vulnerable children and young people.
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-warning me-2" />
                Join millions of people from around the world learning together.
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-warning me-2" />
                Join millions of people from around the world learning together. Online learning is as easy and natural.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnerOutcomes;
