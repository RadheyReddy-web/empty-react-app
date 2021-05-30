import React from 'react';
import Story from './Story';
import Video from './Video';
import DetailsReducer from 'library/common/reducers/DetailsReducer';
import { useSelector } from 'react-redux';
const Stories = props => {
  const { details } = useSelector(state => state);
  const { stories = [] } = details;

  function renderStories() {
    return stories.map(story => (
      <div className="row">
        <Story story={story} />
      </div>
    ));
  }

  return (
    <section className="section-stories" aria-label="Our Happy Customers">
      <Video />

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      {renderStories()}

      <div className="u-center-text u-margin-top-huge">
        <button className="btn-text" aria-label="Read all our customer stories">Read all stories &rarr;</button>
      </div>
    </section>
  );
};

export default Stories;
