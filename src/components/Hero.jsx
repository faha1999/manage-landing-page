import React from 'react';
import illustration from '../assets/images/illustration-intro.svg';

export const Hero = () => {
  return (
    <>
      <div className="container hero">
        <div className="row">
          <div className="col-md-6 col-sm-12 img">
            <img
              height="100%"
              width="90%"
              src={illustration}
              alt="illustration"
            />
          </div>

          <div className="col-md-6 col-sm-12 heroText">
            <h1>Bring everyone together to build better products.</h1>
            <p>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button class="">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};