import React from 'react';
import './feature.scss';
const Feature = props => {
  const { iconType, title, description } = props;
  const boxIconClass = `feature-box__icon icon-basic-${iconType}`;
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className={boxIconClass}></i>
        <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
        <p className="feature-box__text">{description}</p>
      </div>
    </div>
  );
};

export default Feature;
