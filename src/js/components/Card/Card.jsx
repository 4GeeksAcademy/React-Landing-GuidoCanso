import React from "react";

const Card = () => {
  return (
    <div className="card m-4" style={{ width: "18rem" }}>
      <img src="https://www.uritec.es/images/placehold/300x225.png" className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <h5 className="card-title">Título</h5>
        <p className="card-text">Descripción de la tarjeta.</p>
        <a href="#" className="btn btn-primary">Ver más</a>
      </div>
    </div>
  );
};

export default Card;