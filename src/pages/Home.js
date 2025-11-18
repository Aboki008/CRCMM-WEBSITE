import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Ministries from '../components/Ministries';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
  <Services />
  <Ministries />
    </div>
  );
};

export default Home;