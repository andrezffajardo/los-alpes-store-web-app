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
      className="card w-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div className="row g-0 align-items-center">
        <div className="col-md-3">
          <img src={product.image} alt={product.name}  className="img-fluid" />
        </div>
        <div className="col-md-9 bg-secondary">
          <div className="card-body ">
            <div className="row g-0">
              <div className="col-md-6 bg-success">
                <h2 className="card-title fs-4 ps-2">{product.name}</h2>
                <p className="card-text fs-6 ps-2">${product.price}</p>
                  <div>
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
                  </div>
              </div>
              <div className="col-md-6 bg-warning">
                {showDescription && (
                <div
                  className="description"
                  onMouseEnter={() => setShowDescription(true)}
                  onMouseLeave={() => setShowDescription(false)}
                >
                  <h3 className="card-description fs-4 ps-2">Description</h3>
                  <p>
                    {product.description}
                  </p>
                </div>
                  )}
              </div>
            </div>
          </div>
        </div>
              {showFullDetails && (
                  <button className="btn btn-primary">Edit</button>
              )}
          </div>

    </div>
  );
}

