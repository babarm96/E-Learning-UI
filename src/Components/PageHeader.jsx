import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div
      className="d-flex align-items-center mb-5 "
      style={{
        height: '480px',
        paddingTop: '6rem', // replaces mt-5 spacing
        background: 'linear-gradient(to bottom,rgb(40, 25, 210),rgb(244, 114, 222))',
        color: 'white',
        paddingLeft: '150px' // space from the left
      }}
    >
      <div>
        <h1
          className="fw-bold"
          style={{
            fontSize: '3.5rem',
            marginBottom: '20px'
          }}
        >
          {title}
        </h1>
        <p style={{ fontSize: '1.1rem', margin: 0 }}>
          <Link className="me-2 text-light text-decoration-none" to="/">Home</Link> | <span className="ms-2">{subtitle}</span>
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
