import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
  return (
    <div className="login-container">
      <video autoPlay muted loop className="bg-video">
        <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="login-card p-4 text-center">
        <div className="avatar-wrapper mb-3">
          <div className="avatar-circle">
            <i className="bi bi-person fs-2"></i>
          </div>
        </div>
        <h3 className="text-white mb-4">Login Here</h3>

        <form>
          <div className="mb-3 text-start">
            <label className="form-label text-white">Email</label>
            <input type="email" className="form-control bg-transparent text-white border-bottom" placeholder="Email" />
          </div>
          <div className="mb-4 text-start">
            <label className="form-label text-white">Password</label>
            <input type="password" className="form-control bg-transparent text-white border-bottom" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-outline-warning login-btn w-100">Login</button>
        </form>

        <div className="mt-3">
  <Link to="/" className="text-white d-block">Forget Password</Link>
  <Link to="/" className="text-white d-block">Registration</Link>
</div>
      </div>
    </div>
  );
};

export default Login;
