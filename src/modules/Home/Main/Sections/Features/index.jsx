import DetailsReducer from 'library/common/reducers/DetailsReducer';
import React, { useReducer } from 'react';
import { useSelector, useStore } from 'react-redux';
import Feature from './Feature';
const Features = () => {
  const { details } = useSelector(state => state);
  const { features } = details;

  return (
    <section className="section-features" aria-label="Exciting Features Available">
      <div className="row">
        {features.map(feature => (
          <Feature {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
