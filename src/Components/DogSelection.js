import React, { useState,useEffect } from 'react';
import '../Style/DogSelection.css';
import AddDogPopUp from './AddDogPopUp';


function DogSelection(props){
    const [modalShow, setModalShow] = useState(false);
    const [customerdata,setCustomerData] = useState({Name:'',Phone:'',Dog:''});
    const [Selected,setSelected] = useState(null);
    const [Dogs,setDogs] = useState([
        {type:'German',src:'../images/German.jpg'},
        {type:'Griffon',src:'../images/Griffon.jpg'},
        {type:'Rot',src:'../images/Rot.jpg'},
        {type:'Golden',src:'../images/Golden.jpg'},
        {type:'Pit Bull',src:'../images/pitbull.jpg'},
        {type:'Husky',src:'../images/husky.jpg'},
        {type:'Piknwah',src:'../images/Piknwah.jpg'},
        {type:'Griffon Mix',src:'../images/Griffon Mix.jpg'},
        {type:'Shitzu',src:'../images/shitzu.jpg'},
        {type:'Balady',src:'../images/Balady.png'},
    ]);

    useEffect(()=>{props.onselection(customerdata)});

    const SelectDog = (i)=>{
        if(Selected===i){
            setSelected(null);
            setCustomerData({...customerdata,Dog:''});
        }else{
            setSelected(i);
            setCustomerData({...customerdata,Dog:Dogs[i].type});
        }
    }

    const AddOtherDogType = (dogType) =>{
        if(dogType!=''){
            setDogs(current => [...current,{type:dogType, src:'../images/dog.png'}]);
        }
        setModalShow(false);
    }

    let DogsDisplay=[];
    for(let i=0;i<Dogs.length;i++){
        DogsDisplay[i] = <div key={i} 
                            className='f-col m-2' 
                            onClick={(e)=>{SelectDog(i)}}>
                                <img  className={Selected===i?'img-thumbnail selected container icon':'img-thumbnail container icon'} 
                                    src={Dogs[i].src}>
                                </img>
                            {Dogs[i].type}
                        </div>
    }

    return(
        <div className='f-col p-2'>
            <div className='f-row font bold m-2'>
                <div className='me-3'>
                    <label>Name</label>
                    <input className='form-control' 
                            type="text" name="Name" 
                            placeholder='Type Your Name' 
                            onChange={e=>setCustomerData({...customerdata,Name:e.target.value})}
                            value={customerdata.Name}
                            required>
                    </input>
                </div>
                <div>
                    <label>Phone</label>
                    <input className='form-control' 
                            type="numeric" name='Phone' 
                            placeholder='Type Your Phone' 
                            onChange={e=>setCustomerData({...customerdata,Phone:e.target.value})}
                            value={customerdata.Phone}
                            required>
                    </input>
                </div>
            </div>
            <div className='f-col font w-100'>
                <div className='align-self-start bold my-2 ms-3'>
                    Choose Your Dog Type
                </div>
                <div className='f-row flex-wrap'>
                    {DogsDisplay}
                    <div className='f-col' onClick={(e) => setModalShow(true)}>
                            <div className='f-row icon container'>
                                <i className="bi bi-plus-lg fs-1 bold"></i>
                            </div>
                            Other
                    </div>
                </div>
            </div>
            <AddDogPopUp show={modalShow} onHide={()=> setModalShow(false)} onaddpressed={AddOtherDogType}></AddDogPopUp>
        </div>
    );
}

export default DogSelection;