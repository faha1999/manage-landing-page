import React from 'react';
import desktopBg from '../assets/images/bg-simplify-section-desktop.svg';
import mobileBG from '../assets/images/bg-simplify-section-mobile.svg';

export const Newsletter = () => {
  return (
    <>
      <section className="newsletter">
        <div className="container">
          <div className="content">
            <h2>Simplify how your team works today.</h2>
            <button className="ms-auto">Get Started</button>
          </div>
        </div>
        {/* <img src={mobileBG} alt="mobileBG" className="mobileBG" />
        <img src={desktopBg} alt="desktopBg" className="desktopBg" /> */}
      </section>
    </>
  );
};
