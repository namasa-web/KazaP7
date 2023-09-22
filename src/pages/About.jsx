import React from 'react';
import Banner from '../components/banner/banner';
import ImageAbout from '../assets/about_cover.png';

function About() {
  return (
    <div className="page_about">
      <Banner backgroundImage={ImageAbout} />
    </div>
  );
}

export default About;