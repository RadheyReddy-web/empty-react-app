import React from 'react';
import './story.scss';
const Story = props => {
  const { story } = props;

  if (story) {
    const { src, userName, title, description } = story;

    return (
      <div className="story">
        <figure className="story__shape">
          <img src={require(`../../../../../../resources/images/${src}`)} alt="Person on a tour" className="story__img" />
          <figcaption className="story__caption">{userName}</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Story;
