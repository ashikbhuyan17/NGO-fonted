import React from 'react';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';

const About = () => {
  return (
    <main>
      <Navbar/>
      <div className='center'>
        <h1>About Page</h1>
        <h4>Version: 1.0.1</h4>
      </div>
      <Footer/>
    </main>
  );
};

export default About;
