import React from 'react';
import { useState } from "react";


export const ProductCard = ({product, deleteProduct}) => {

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

  const handleCardClick = (event) => {
    if (event.target.className !== 'btn btn-danger') {
      setShowFullDetails(!showFullDetails);
    }
  }


  return (
    <div
      className="card rounded shadow w-80 mt-5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      {showButton && (
        <button
          className="btn btn-danger"
          onMouseEnter={() => setShowButton(true)}
          onMouseLeave={() => setShowButton(false)}
          onClick={() => deleteProduct(product.id)}
        >
          Detete Item
        </button>
      )}
      <img className="card-img-top" src={product.image} alt={product.name} />
      <h2 className="card-title fs-3 ps-2">{product.name}</h2>
      <div className="price-description-container ps-2">
        <div className="price-button-container">
          <p className="card-text fs-4 mt-2">${product.price}</p>
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
          <button className="btn btn-primary">Edit</button>
      )}
    </div>
  );
}

