import React from 'react';
import { Header } from './components/Header';
import bgTop from './assets/images/bg-tablet-pattern.svg';
import { Hero } from './components/Hero';

export const App = () => {
  return (
    <>
      <img src={bgTop} alt="" className="bgTop" />
      <Header />
      <Hero />
    </>
  );
};
