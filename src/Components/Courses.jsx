import React from 'react'
import { Link } from 'react-router-dom';
import CoursesSection from './CoursesSection'
import PageHeader from './PageHeader';
import TopSubjects from './TopSubjects';
import Cards from './Cards'

const Courses = () => {
  return (
    <div>
     
         <PageHeader title="Our Courses" subtitle="Services" />
        <CoursesSection/>

       <div className='text-center'><Link to="/" className="btn btn-outline-warning animated-login-btn px-5 py-3 fw-bold text-center">Load More</Link></div> 
        <TopSubjects/>
        
        <Cards/>

      
    </div>
  )
}

export default Courses
