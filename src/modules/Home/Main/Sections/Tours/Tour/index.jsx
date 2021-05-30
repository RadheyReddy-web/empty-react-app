import React from 'react';
import './tour.scss';
const Tour = props => {
  const { cardIndex, tour } = props;
  const { header, details, price } = tour;
  const { days, people, guides, sleepType, difficulty } = details;
  const cardHeadingClasses = `card__heading-span card__heading-span--${cardIndex}`;
  const pictureClasses = `card__picture card__picture--${cardIndex}`;
  const cardBackClasses = `card__side card__side--back card__side--back-${cardIndex}`;
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={pictureClasses}>&nbsp;</div>
          <h4 className="card__heading">
            <span className={cardHeadingClasses}>{header}</span>
          </h4>
          <div className="card__details">
            <ul>
              <li>{days} day tours</li>
              <li>Up to {people} people</li>
              <li>{guides} tour guides</li>
              <li>{sleepType}</li>
              <li>Difficulty: {difficulty}</li>
            </ul>
          </div>
        </div>
        <div className={cardBackClasses}>
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">{price}</p>
            </div>
            <a href="#popup" className="btn btn--white">
              Book now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
