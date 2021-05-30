import DetailsReducer from 'library/common/reducers/DetailsReducer';
import React, { useReducer } from 'react';
import { useSelector, useStore } from 'react-redux';
import Tour from './Tour';
const Tours = () => {
  const {details} = useSelector(state => state);
  const { tours: toursData = [] } = details;
  return (
    <section className="section-tours" id="section-tours" aria-label='Most popular tours'>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>

      <div className="row">
        {toursData.map((tour, index) => (
          <Tour tour={tour} cardIndex={index+1} />
        ))}
      </div>

      <div className="u-center-text u-margin-top-huge" >
        <button className="btn btn--green" aria-label="Discover all tours">Discover all tours</button>
      </div>
    </section>
  );
};
export default Tours;
