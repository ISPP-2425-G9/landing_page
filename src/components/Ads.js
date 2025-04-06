import React from "react";
import "../styles/Ads.css";

const Ads = () => {
  const videos = [
    { id: "WHBSjduVhoo", title: "Para clientes" },
  ];

  return (
    <div>
      <h1 className="page-title animate-fade-in">Galería</h1>
      <h3 className="page-subtitle animate-slide-up">Conócenos</h3>
      <div className="video-container">
        {videos.map((video) => (
          <div key={video.id} className="video-item">
            <h2 className="video-title animate-fade-in">{video.title}</h2>
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
