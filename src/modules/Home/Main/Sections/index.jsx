import React from 'react';
import About from './About';
import Book from './Book';
import Features from './Features';
import Stories from './Stories';
import Tours from './Tours';
import './sections.scss';
const Sections = () => {
  return (
      <>
      <About />
      <Features />
      <Tours />
      <Stories />
      <Book />
      </>
  );
};

export default Sections;
