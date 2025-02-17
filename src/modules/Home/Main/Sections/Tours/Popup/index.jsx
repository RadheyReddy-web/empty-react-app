import React from 'react';
import './popup.scss';
const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={require("../../../../../../resources/images/nat-8.jpg")} alt="Tour popup" className="popup__img" />
          <img src={require("../../../../../../resources/images/nat-9.jpg")} alt="Tour popup" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis
            mauris sit amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim
            enim sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
            gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
            Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
            vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam libero justo laoreet sit. Amet massa vitae
            tortor condimentum lacinia quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet sed euismod nisi
            porta.
          </p>
          <button  className="btn btn--green" aria-label="Book A Tour With Us Now">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
