import React from "react";
import "../styles/Ads.css";

const Ads = () => {
  const videos = [
    { id: "ZT6DLKNmrzY", title: "First Video Title" },
    { id: "ZT6DLKNmrzY", title: "Second Video Title" },
  ];

  return (
    <div>
      <h1>Ads</h1>
      <div className="video-container">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <h2 className="video-title">{video.title}</h2>
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
