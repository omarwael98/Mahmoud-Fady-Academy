import '../Style/ProblemSelection.css';
import AddProblemPopUp from './AddProblemPopUp';
import React,{useEffect, useState} from 'react';

function ProblemSelection(props){

    const [modalShow, setModalShow] = useState(false);
    const [Selected, setSelected] = useState(null);
    const [Problems,setProblems] = useState(['Hyperactive',
        'Toilet Out Of Place',
        'Tearing Clothes Or Furniture',
        'Hostile To Dog',
        'Hostile To People',
        'Biting',
        'Fear Of Dogs',
        'Fear Of People',
    ]);

    useEffect(()=>props.onselection((Selected===null?{Problem:''}:{Problem:Problems[Selected]})));

    const SelectProblem = (i)=>{
        if(Selected===i){
            setSelected(null);
        }else{
            setSelected(i);
        }
    }

    const AddOtherProblems = (problem) =>{
        if(problem!=''){
            setProblems(current => [...current,problem]);
        }
        setModalShow(false);
    }


    let ProblemDisplay = [];
    for(let i=0;i<Problems.length;i++){
        ProblemDisplay[i] = <div key={i} 
                                className={Selected===i?'f-row text-center fs-6 problem-div container m-2 p-2 selected'
                                :'f-row text-center fs-6 problem-div container m-2 p-2'} 
                                onClick={(e)=>{SelectProblem(i)}}>
                                    {Problems[i]}
                            </div> ;
    }

    return(
        <div className='f-col p-2 w-100'>
            <div className='f-col font w-100'>
                <div className='align-self-start bold my-2 ms-3'>
                    Choose Your Dog's Problem
                </div>
                <div className='f-row flex-wrap w-100'>
                    {ProblemDisplay}
                    <div className='f-row text-center problem-div container m-2 p-2' 
                        onClick={(e)=>{setModalShow(true)}}>
                            Other
                    </div>
                    <AddProblemPopUp show={modalShow} onHide={()=> setModalShow(false)} onaddpressed={AddOtherProblems}></AddProblemPopUp>
                </div>
            </div>
        </div>
    );
}

export default ProblemSelection;