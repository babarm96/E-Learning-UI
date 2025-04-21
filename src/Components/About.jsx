import React from 'react'
import PageHeader from './PageHeader';
import Cards from './Cards'
import HeroSection from './HeroSection'
import TopSubjects from './TopSubjects';
import LernerOutcomes from './LearnerOutcomes';
import CommunityExperts from './CommunityExperts';

const About = () => {
  return (
    <div>
      <PageHeader title="About Us" subtitle="About" />
      <Cards/>
      <HeroSection/>
      <TopSubjects/>
      <LernerOutcomes/>
      <CommunityExperts/>
    </div>
  )
}

export default About
