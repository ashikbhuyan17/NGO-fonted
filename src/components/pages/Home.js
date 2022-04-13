import React from 'react';

import Banner from '../layouts/Banner';
import AidTracker from '../layouts/AidTracker';
import Campaign from '../layouts/Campaign';
import CardBlock from '../layouts/CardBlock';
import Quote from '../layouts/Quote';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';


const Home = () => {
  return (
    <main>
      <Navbar/>
      <Banner />
      <AidTracker />
      <Campaign />
      <CardBlock />
      <Quote />
      <Footer/>

      
    </main>
  );
};

export default Home;
