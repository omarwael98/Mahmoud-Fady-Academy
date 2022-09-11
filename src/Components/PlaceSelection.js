import '../Style/PlaceSelection.css';
import React,{useState, useEffect} from 'react';


function PlaceSelection(props){

    const [Selected, setSelected] = useState(null);
    const [VisitPrices,setVisitPrices] = useState([
        {type:'Home Visit', price:'600 EGP'},
        {type:'Academy Visit', price:'600 EGP'},
    ]);

    useEffect(()=>props.onselection((Selected===null?{Place:''}:{Place:VisitPrices[Selected].type})));

    const SelectPlace = (i)=>{
        if(Selected===i){
            setSelected(null);
        }else{
            setSelected(i);
        }
    }

    return (
        <div className='f-col p-2 w-100'>
            <div className='f-col font w-100'>
                <div className='align-self-start bold my-2 ms-3'>
                    Choose The Place Of The Visit
                </div>
                <div className='f-row flex-wrap w-100'>
                    <div className={Selected===1?'f-col text-center place-div container m-2 p-2 fs-5 selected'
                        :'f-col text-center place-div container m-2 p-2 fs-5'}
                         onClick={(e)=>{SelectPlace(1)}}>
                        <img src='../images/AcademyV.png'></img>
                        Academy Visit
                        <div className='price-div fs-3'>
                            {VisitPrices[1].price}
                        </div>
                    </div>
                    <div className={Selected===0?'f-col text-center place-div container m-2 p-2 fs-5 selected'
                        :'f-col text-center place-div container m-2 p-2 fs-5'}
                        onClick={(e)=>{SelectPlace(0)}}>
                        <i className="bi bi-house-door-fill home-icon"></i>
                        Home Visit
                        <div className='price-div fs-3'>
                            {VisitPrices[0].price}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlaceSelection;