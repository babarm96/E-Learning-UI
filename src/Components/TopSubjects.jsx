import React from 'react';
import './TopSubjects.css';

const subjects = [
  { title: 'PROGRAMMING', img: '/assets/images/img1.png' },
  { title: 'PROGRAMMING', img: '/assets/images/img2.png' },
  { title: 'PROGRAMMING', img: '/assets/images/img3.png' },
  { title: 'PROGRAMMING', img: '/assets/images/img4.png' },
  { title: 'PROGRAMMING', img: '/assets/images/img5.png' },
  { title: 'PROGRAMMING', img: '/assets/images/img6.png' },
  { title: 'PROGRAMMING', img: '/assets/images/img7.png' },
  { title: 'PROGRAMMING', img: '/assets/images/img8.png' },
];

const TopSubjects = () => {
  return (
    <section className="py-5 text-center">
      <h2 className="text-primary fw-semi-bold mb-5" style={{ fontSize: '2.5rem' }}>
        Explore top subjects
      </h2>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {subjects.map((subject, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="subject-card position-relative rounded overflow-hidden">
                <img src={subject.img} alt={subject.title} className="w-100 h-100 object-fit-cover" />
                <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                  <h5 className="text-white fw-bold m-0">{subject.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-outline-warning mt-5 px-5 py-3  fw-semibold">
          View More Subjects
        </button>
      </div>
    </section>
  );
};

export default TopSubjects;
