import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="contact-wrapper py-5 px-4 px-md-5">
      <h2 className="mb-5 text-primary fw-bold">Get in Touch</h2>
      <div className="row gx-5">
        {/* Left Side - Form */}
        <div className="col-lg-8 mb-5 mb-lg-0">
          <form
            noValidate
            className={`needs-validation ${validated ? 'was-validated' : ''}`}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Enter Message"
                required
                rows="6"
              ></textarea>
              <div className="invalid-feedback">Please enter a message.</div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
                <div className="invalid-feedback">Name is required.</div>
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
                <div className="invalid-feedback">Valid email is required.</div>
              </div>
            </div>

            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Subject"
                required
              />
              <div className="invalid-feedback">Subject is required.</div>
            </div>
            <button type="submit" className="btn btn-outline-info animated-outline-btn  px-4">
  <span>SEND</span>
</button>

          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="col-lg-4 d-flex flex-column gap-4">
          <div className="d-flex align-items-start">
            <i className="bi bi-house-door-fill fs-4 me-3 text-muted"></i>
            <div>
              <strong>Buttonwood, California.</strong>
              <br />
              Rosemead, CA 91770
            </div>
          </div>
          <div className="d-flex align-items-start">
            <i className="bi bi-phone-fill fs-4 me-3 text-muted"></i>
            <div>
              <strong>+1 253 565 2365</strong>
              <br />
              Mon to Fri 9am to 6pm
            </div>
          </div>
          <div className="d-flex align-items-start">
            <i className="bi bi-envelope-fill fs-4 me-3 text-muted"></i>
            <div>
              <strong>support@colorlib.com</strong>
              <br />
              Send us your query anytime!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
