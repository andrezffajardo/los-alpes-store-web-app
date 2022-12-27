import React, { useState } from 'react';
import ModalEditForm from './ModalEditForm';

// ProductCard component displays a card for a single product
const ProductCard = ({ product, deleteProduct, editProduct }) => {

  // showDescription and showButton state variables control
  // for show description and delete button
  const [showDescription, setShowDescription] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // The handleMouseEnter and handleMouseLeave functions are
  //called when the mouse enters or leaves the card
  const handleMouseEnter = () => {
    setShowDescription(true);
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
    setShowButton(false);
  };

  // active Modal in ModalEditForm component
  const [ show, setShow ] = useState(false);
  // handleClose and handleShow functions are used to show or hide modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handleDelete function is called when the delete button is clicked
  const handleDelete = () => {
    // active Alert Message for confirm delete or decline delete
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
          <div className="d-flex flex-column">
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
            <img src={product.image} alt={product.name}  className="img-fluid" />
              <div className="card-body bg-light">
                <div className="col-md-12">
                  <h2 className="card-title fs-4 ps-2">{product.name}</h2>
                  <p className="card-text fs-6 ps-2">${product.price}</p>
                </div>
                  {showDescription && (
                  <div
                      className="description"
                      onMouseEnter={() => setShowDescription(true)}
                      onMouseLeave={() => setShowDescription(false)}
                    >
                    <hr />
                    <div className="card-description ps-2">
                      <h3 className="card-description-title fs-5">Description</h3>
                      <p>
                        {product.description}
                      </p>
                    </div>
                  </div>
                    )}
              </div>
          </div>
        </div>
      </div>
      <ModalEditForm show={show} handleClose={handleClose} editProduct={editProduct} id={ product.id } name={product.name} price={product.price} description={product.description} image={product.image}/>
    </>
  );
};

export default ProductCard;
