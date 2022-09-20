import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function AddDogPopUp(props) {
  const [dogType, setDogType] = useState("");

  const addDogClickHandler = () => {
    props.onaddpressed(dogType);
    setDogType("");
  };

  const dogInputHandler = (e) => {
    setDogType(e.target.value);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="font">Add Your Dog Type</h4>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Your Dog Type"
          onChange={dogInputHandler}
          value={dogType}
        />
      </Modal.Body>
      <Modal.Footer className="f-row">
        <button className="Active-btn btn" onClick={addDogClickHandler}>
          Add
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddDogPopUp;
