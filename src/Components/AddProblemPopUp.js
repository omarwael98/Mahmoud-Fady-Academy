import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function AddProblemPopUp(props) {
  const [problem, setProblem] = useState("");

  const addProblemClickHandler = () => {
    props.onaddpressed(problem);
    setProblem("");
  };

  const addProblemInputHandler = (e) => {
    setProblem(e.target.value);
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
        <h4 className="font">Add Your Dog's Problem</h4>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Your Dog Type"
          onChange={addProblemInputHandler}
          value={problem}
        />
      </Modal.Body>
      <Modal.Footer className="f-row">
        <button className="Active-btn btn" onClick={addProblemClickHandler}>
          Add
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddProblemPopUp;
