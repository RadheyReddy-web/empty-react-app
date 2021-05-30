import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <button  className="navigation__link" aria-label="About Natous">
              About Natous
            </button>
          </li>
          <li className="navigation__item">
            <button  className="navigation__link" aria-label="Benifits you get from us">
              Your benfits
            </button>
          </li>
          <li className="navigation__item">
            <button  className="navigation__link" aria-label="Our Most Popular Tours">
              Popular tours
            </button>
          </li>
          <li className="navigation__item">
            <button  className="navigation__link" aria-label="Read Our Customers Stories">
              Stories
            </button>
          </li>
          <li className="navigation__item">
            <button  className="navigation__link" aria-label="Book Exciting Tour with us">
              Book now
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
