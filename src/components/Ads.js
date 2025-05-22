import React from "react";
import "../styles/Ads.css";

const Ads = () => {
  const videos = [
    { id: "uGpvNpU9EIo", title: "Demostración funcional" },
    { id: "XnotNAK2KIw", title: "Invierte en nosotros" },
    { id: "ZW6snDb0S1Y", title: "Deja un mensaje a tus seres queridos" },
    { id: "4R1P9xJR_rI", title: "Da a conocer a tu empresa" },
    { id: "A-4sGpycQvs", title: "Caronte... más allá de la muerte" },
    { id: "pYqUkD59B3Q", title: "Mensaje eterno para tus seres queridos" },
    { id: "OVbOt_CRns4", title: "El próximo cliente" },
    { id: "Q8Y_-gV4-7M", title: "No dejes tu despedida en manos del azar" },
    { id: "qNVG52D9G_M", title: "El último regalo de amor" },
    { id: "uCo6cCiOkb4", title: "Un último adiós" },
    { id: "HohbnPxt2-o", title: "Despídete como mereces, deja tu legado digital" },
    { id: "pBQz3o5Ixbw", title: "Crea tu propia esquela" },
    { id: "dfncf-0kKSc", title: "Crea una esquela para un ser querido" },
    { id: "7PDg0I9qPxw", title: "Nuestros planes de suscripción" },
    { id: "w4f108ntJ8o", title: "Deja un mensaje personalizado" },
    { id: "TEhbzZRXVUE", title: "Guarda tus contactos de emergencia" },
    

  ];

  return (
    <div>
      <h1 className="page-title animate-fade-in">Galería</h1>
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
