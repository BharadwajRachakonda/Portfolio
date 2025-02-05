import React from "react";

/*

    VideoPlayer takes props

    video

    */

const VideoPlayer = (props) => {
  return (
    <div>
      <video autoPlay loop muted className="w-full">
        <source src={props.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
