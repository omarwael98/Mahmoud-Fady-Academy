import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';  
import '../Style/AddDogPopUp.css';

function AddDogPopUp(props) {
    const [dogType,setDogType] = useState('');
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4 className='font'>Add Your Dog Type</h4>
            <input className='form-control' 
                    type='text' 
                    placeholder='Enter Your Dog Type' 
                    onChange={(e)=>setDogType(e.target.value)} 
                    value={dogType}>
            </input>
        </Modal.Body>
        <Modal.Footer className='f-row'>
            <button className='Active-btn btn' onClick={(e)=>props.onaddpressed(dogType)}>Add</button>
        </Modal.Footer>
        </Modal>
    );
}

export default AddDogPopUp;