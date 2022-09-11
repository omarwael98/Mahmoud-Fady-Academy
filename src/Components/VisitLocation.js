import React, { useState,useEffect } from 'react';
import '../Style/VisitLocation.css';

function VisitLocation(props){

    const [Cities,setCities] = useState(['Cairo','Alex','Giza']);
    const [location,setLocation] = useState({Address:'',City:'',Info:''});

    useEffect(()=>props.onselection(location));

    const CitiesList = [];
    for(let i=0;i<Cities.length;i++){
        CitiesList[i] = <li key={i} 
                            className='dropdown-item' 
                            onClick={e=>setLocation({...location,City:Cities[i]})}>
                                {Cities[i]}
                        </li>
    }

    return(
        <div>
            <div className='align-self-start bold my-2 ms-3 font'>Visiting Location</div>
            <div className='font mx-4 my-2'>
                <div className=''>
                    <label>Address</label>
                    <input className='form-control' 
                        type="text" name='address' 
                        placeholder='St Name/Building Number' 
                        value={location.Address} 
                        onChange={e=>setLocation({...location,Address:e.target.value})}>
                    </input>
                </div>
                <div className="input-group my-2 d-flex flex-column">
                    <label>City</label>
                    <button className={location.City===''?"btn city-dropdown dropdown-toggle":"btn city-dropdown dropdown-toggle city-selected"}
                        type="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false">
                            {location.City===''?'City':location.City}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                        {CitiesList}
                    </ul>
                </div>
                <div className=''>
                    <label>Additional Info</label>
                    <input className='form-control' 
                        type="numeric" name='extra' 
                        placeholder='Additional Info' 
                        value={location.Info} 
                        onChange={e=>setLocation({...location,Info:e.target.value})}>
                    </input>
                </div>
            </div>
        </div>
    );
}

export default VisitLocation;