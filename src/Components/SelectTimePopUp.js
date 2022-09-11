import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../Style/SelectTimePopUp.css';

function SelectTimePopUp(props) {
    const [Appointments,setAppointment] = useState(['8:00 AM',
        '9:00 AM',
        '10:00 AM',
        '8:00 PM',
        '9:00 PM',
        '11:00 AM',
        '6:00 PM',
        '5:30 PM',
        '1:00 PM',
    ]);
    const [Selected, setSelected] = useState(null);

    const SelectTime = (i)=>{
        if(Selected===i){
            setSelected(null);
        }else{
            setSelected(i);
        }
    }

    const AvailableTime = [];
    for(let i=0;i<Appointments.length;i++){
        AvailableTime[i] = <div key={i} 
                                className={Selected===i?'f-row text-center fs-6 time-div container font m-2 p-2 selected'
                                :'f-row text-center fs-6 time-div container font m-2 p-2'} 
                                onClick={(e)=>{SelectTime(i)}}>
                                    {Appointments[i]} 
                            </div> ;
        
    }

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
            <div className='d-flex justify-content-center fs-1 my-2'>
                {props.preferreddate}
            </div>
            <div className='d-flex justify-content-center my-2 '>
                <button className='change-day-btn' onClick={props.onHide}>
                    Change Day
                </button>
            </div>
            <h4 className='font'>Available Time</h4>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                {AvailableTime}
            </div>
        </Modal.Body>
        <Modal.Footer className='f-row'>
            <button className='Active-btn btn' 
                    onClick={(e)=>props.onaddpressed(Appointments[Selected])}
                    disabled = {Selected===null}>
                        Book
            </button>
        </Modal.Footer>
        </Modal>
    );
}

export default SelectTimePopUp;