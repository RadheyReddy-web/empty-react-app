import React from 'react';
import './index.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={require("../../../resources/images/logo-green-2x.png")} alt="Full logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <button  className="footer__link">
                  Company
                </button>
              </li>
              <li className="footer__item">
                <button  className="footer__link">
                  Contact us
                </button>
              </li>
              <li className="footer__item">
                <button  className="footer__link">
                  Carrers
                </button>
              </li>
              <li className="footer__item">
                <button  className="footer__link">
                  Privacy policy
                </button>
              </li>
              <li className="footer__item">
                <button  className="footer__link">
                  Terms
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{' '}
            <button  className="footer__link">
              Radhey
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
