import React from 'react';
import './video.scss';

const Video = () => {
  return (
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={require("../../../../../../resources/images/video.mp4")} type="video/mp4" />
        <source src={require("../../../../../../resources/images/video.webm")} type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
  );
};

export default Video;
