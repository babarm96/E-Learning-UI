import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebookF, FaPinterestP, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="row">
          {/* Left Column - 40% */}
          <div className="col-lg-5 mb-4">
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-book-fill fs-2 me-2"></i>
              <h5 className="m-0">Courses</h5>
            </div>
            <p className="footer-desc">
              The automated process starts as soon as your clothes go into the machine.
            </p>
            <div className="d-flex social-icons">
              <div className="icon-circle"><FaTwitter /></div>
              <div className="icon-circle"><FaFacebookF /></div>
              <div className="icon-circle"><FaPinterestP /></div>
            </div>
          </div>

          {/* Right Columns - 60% */}
          <div className="col-lg-7">
            <div className="row">
              <div className="col-md-4 mb-4">
                <h5>Our solutions</h5>
                <ul className="list-unstyled">
                  <li>Design & creatives</li>
                  <li>Telecommunication</li>
                  <li>Restaurant</li>
                  <li>Programing</li>
                  <li>Architecture</li>
                </ul>
              </div>
              <div className="col-md-4 mb-4">
                <h5>Support</h5>
                <ul className="list-unstyled">
                  <li>Design & creatives</li>
                  <li>Telecommunication</li>
                  <li>Restaurant</li>
                  <li>Programing</li>
                  <li>Architecture</li>
                </ul>
              </div>
              <div className="col-md-4 mb-4">
                <h5>Company</h5>
                <ul className="list-unstyled">
                  <li>Design & creatives</li>
                  <li>Telecommunication</li>
                  <li>Restaurant</li>
                  <li>Programing</li>
                  <li>Architecture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="mb-0">
            Copyright ©2025 All rights reserved |
            This template is made with <span className="text-pink">💜</span> by Colorlib
          </p>
        </div>

        {/* Scroll to top circle */}
        <div className="scroll-top-circle" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowUp />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
