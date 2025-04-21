import React, { useRef } from 'react';
import './CoursesSection.css';

const courses = [
  {
    id: 1,
    image: '/assets/images/img1.png',
    title: 'UX for Mobile Design',
    category: 'User Experience',
    description:
      'Master mobile UX principles to build user-friendly apps. Explore design tools & techniques.',
    rating: 4.5,
    reviews: 120,
    price: 135
  },
  {
    id: 2,
    image: '/assets/images/img2.png',
    title: 'Fundamentals of UX Research',
    category: 'User Experience',
    description:
      'Learn research strategies to understand user behavior and improve product usability.',
    rating: 4.6,
    reviews: 98,
    price: 145
  },
  {
    id: 3,
    image: '/assets/images/img3.png',
    title: 'Designing for Accessibility',
    category: 'User Experience',
    description:
      'Create accessible digital products with inclusive UX strategies and WCAG compliance.',
    rating: 4.7,
    reviews: 110,
    price: 125
  },
  {
    id: 4,
    image: '/assets/images/img4.png',
    title: 'Prototyping with Figma',
    category: 'User Experience',
    description:
      'Explore real-world prototyping in Figma with hands-on design projects.',
    rating: 4.8,
    reviews: 150,
    price: 155
  },
  {
    id: 5,
    image: '/assets/images/img5.png',
    title: 'Information Architecture',
    category: 'User Experience',
    description:
      'Build logical, user-friendly navigation systems and data structures.',
    rating: 4.4,
    reviews: 85,
    price: 130
  }
];

const CoursesSetcion = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({
        left: direction === 'left' ? -360 : 360,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
   <h2 className="text-primary text-center fw-semi-bold " style={{ fontSize: '2.5rem' }}>
            Our featured courses 
      </h2>
    
   
    <div className="carousel-wrapper container py-5 position-relative">
         
      <button className="carousel-btn left" onClick={() => scroll('left')}>&lt;</button>
      <div className="scroll-container" ref={scrollRef}>
        {courses.map((course) => (
          <div className="card course-card" key={course.id}>
            <img src={course.image} className="card-img-top" alt={course.title} />
            <div className="card-body d-flex flex-column">
              <p className="text-muted small mb-1">{course.category}</p>
              <h5 className="card-title text-primary fw-bold">{course.title}</h5>
              <p className="card-text text-muted flex-grow-1">{course.description}</p>
              <div className="d-flex align-items-center mb-2">
                <span className="text-warning fs-5 me-2">★ ★ ★ ★ ☆</span>
              </div>
              <small className="text-muted mb-2">
                <span className="text-orange me-1">({course.rating})</span> based on {course.reviews}
              </small>
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold text-primary fs-5">${course.price}</span>
              </div>
              <button className="btn custom-btn btn btn-outline-dark animated-login-btn mx-auto mt-3">Find Out More</button>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn right" onClick={() => scroll('right')}>&gt;</button>
    </div>
    </div>
  );
};

export default CoursesSetcion;
