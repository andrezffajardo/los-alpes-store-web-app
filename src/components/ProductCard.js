import React from 'react';
import { useState } from "react";


export const ProductCard = ({product}) => {


  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showFullDetails, setShowFullDetails] = useState(false);



  const handleMouseEnter = () => {
    setShowDescription(true);
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
    setShowButton(false);
  };

  const handleCardClick = () => {
    setShowFullDetails(!showFullDetails);
  }

  return (
    <div
      className="card rounded shadow w-80 mt-5"
      onMouseOver={handleMouseEnter}
      onMouseOut={handleMouseLeave}
      onClick={handleCardClick}
    >
      {showButton && (
        <button
          className="btn btn-danger"
          onMouseEnter={() => setShowButton(true)}
          onMouseLeave={() => setShowButton(false)}
        >
          Detete Item
        </button>
      )}
      <img className="card-img-top" src={product.image} alt={product.name} />
      <h2 className="card-title">{product.name}</h2>
      <div className="price-description-container">
        {/* Agregamos estilos para que el precio y el botón aparezcan al lado el uno del otro */}
        <div className="price-button-container py-5">
          <p className="card-text mr-3">{product.price}</p>
        </div>
        {showDescription && (
          <div
            className="description"
          >
            <p 
              onMouseEnter={() => setShowDescription(true)}
              onMouseLeave={() => setShowDescription(false)}
              >
              {product.description}
            </p>
          </div>
        )}
      </div>
      {showFullDetails && (
        <div>
          <button className="btn btn-primary">Edit</button>
        </div>
      )}
    </div>
  );
}

