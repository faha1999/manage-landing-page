import React, { useState } from 'react';
import logo from '../assets/images/logo.svg';
import close from '../assets/images/icon-close.svg';
import hamburger from '../assets/images/icon-hamburger.svg';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="container">
        <nav>
          <div className="mobile">
            <img src={logo} alt="manage" className="logo" />

            <div className="togglerIcon">
              {isOpen ? (
                <img src={close} alt="" onClick={toggle} />
              ) : (
                <img src={hamburger} alt="" onClick={toggle} />
              )}
            </div>
          </div>

          <div className={isOpen ? 'items' : 'items hide'}>
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>

          <div>
            <button className="navBtn">Get Started</button>
          </div>
        </nav>
      </div>
    </>
  );
};
