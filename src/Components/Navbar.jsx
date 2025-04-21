// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // We'll use this for custom styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  fixed-top custom-navbar px-4 py-3">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand text-white d-flex align-items-center" to="/">
          <i className="bi bi-book-fill fs-1 me-2"></i> {/* Bootstrap icon */}
          <span className="fw-bold fs-3">Courses</span>
        </Link>

        {/* Toggle for mobile */}
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
          {/* Center links */}
          <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0 text-bold">
            <li className="nav-item mx-3">
              <Link className="nav-link text-white fw-bold" to="/">Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-white fw-bold" to="/courses">Courses</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link text-white fw-bold" to="/about">About</Link>
            </li>
            
            <li className="nav-item mx-3">
              <Link className="nav-link text-white fw-bold" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Buttons */}
          <div className="d-flex gap-2">
            <Link to="/" className="btn btn-outline-light animated-login-btn px-4 fw-bold">Join</Link>
            {/* <Link to="/login" className="btn btn-outline-light fw-medium px-4">Log In</Link> */}
            <Link to="/login" className="btn btn-outline-light animated-login-btn px-4 fw-bold">Log In</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
