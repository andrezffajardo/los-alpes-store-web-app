import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

// ModalEditForm component displays a modal form for editing a product
const ModalEditForm = ({show, handleClose, id, name, description, price, editProduct}) => {

  // The handleSubmit function is called when the user clicks the "Save Changes" button
  const handleSubmit = () => {
    // Get the updated product data from the form
    const updatedProduct = {
      id,
      name: document.getElementById('formProductName').value,
      price: document.getElementById('formPrice').value,
      description: document.getElementById('formDescription').value
    };
    // call editProduct function with updated data
    editProduct(id, updatedProduct);
    console.log(updatedProduct);
    // close modal
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formProductName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" defaultValue={name} placeholder="Product Name" />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control type="number" defaultValue={price} placeholder="Price" />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" defaultValue={description}  placeholder="Description" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalEditForm;


