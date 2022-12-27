import React, { useState } from 'react';
import ModalEditForm from './ModalEditForm';

const ProductCard = ({ product, deleteProduct, editProduct }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
    setShowButton(false);
  };

  //Modal
  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    const confirm = window.confirm(`Are you sure you want to delete ${product.name}?`);
    if (confirm) {
      deleteProduct(product.id);
    }
}

  return (
    <>
      <div  className="p-3" >
        <div
          className="card w-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleShow}
        >
          <div className="row g-0 align-items-center">
            <div className="col-md-3">
              <img src={product.image} alt={product.name}  className="img-fluid" />
            </div>
            <div className="col-md-9">
              <div className="card-body ">
                <div className="row g-0">
                  <div className="col-md-6">
                    <h2 className="card-title fs-4 ps-2">{product.name}</h2>
                    <p className="card-text fs-6 ps-2">${product.price}</p>
                    <div>
                      {showButton && (
                        <button
                          className="btn btn-danger"
                          onMouseEnter={() => setShowButton(true)}
                          onMouseLeave={() => setShowButton(false)}
                          onClick={handleDelete}
                        >
                          Delete Item
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
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
          </div>
        </div>
      </div>
      <ModalEditForm show={show} handleClose={handleClose} editProduct={editProduct} id={ product.id } name={product.name} price={product.price} description={product.description} />
    </>
  );
};

export default ProductCard;
