import React from "react";

const CleaningVideo = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1`;

  return (
    <iframe
      width="100%"
      src={videoUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default CleaningVideo;
