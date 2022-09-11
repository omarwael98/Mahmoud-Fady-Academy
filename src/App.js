import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import './Style/App.css';
import DogSelection from "./Components/DogSelection";
import Offers from "./Components/Offers";
import MyProgressBar from "./Components/ProgressBar";
import ProblemSelection from "./Components/ProblemSelection";
import PlaceSelection from "./Components/PlaceSelection";
import TimeSelection from "./Components/TimeSelection";
import VisitLocation from "./Components/VisitLocation";
import DataReview from "./Components/DataReview";
import Payment from "./Components/Payment";
import FawryPayment from "./Components/FawryPayment";
import ThanksView from "./Components/ThanksView";
import _ from "lodash";


function App() {

  const [AppState,setAppState] = useState(1);
  const [data,setData] = useState({});

  let d = data;
  const GetCustomerData = (Info) =>{
    d = {...d,...Info};
    // EmptyField = Object.values(d).includes('');
  }

  let currentPage,buttonName='Continue';
  if(AppState===1){
    currentPage = <><Offers></Offers>
    <MyProgressBar prog={0}></MyProgressBar>
    <DogSelection onselection={GetCustomerData}></DogSelection></>
    
  }else if(AppState===2){
    currentPage = <><Offers></Offers>
    <MyProgressBar prog={33}></MyProgressBar>
    <ProblemSelection onselection={GetCustomerData}></ProblemSelection></>
  }else if(AppState===3){
    currentPage = <><Offers></Offers>
    <MyProgressBar prog={66}></MyProgressBar>
    <PlaceSelection onselection={GetCustomerData}></PlaceSelection></>
  }else if(AppState===3.5){
    currentPage = <><Offers></Offers>
    <MyProgressBar prog={70}></MyProgressBar>
    <VisitLocation onselection={GetCustomerData}></VisitLocation></>
  }else if(AppState===4){
    currentPage = <><Offers></Offers>
    <MyProgressBar prog={72}></MyProgressBar>
    <TimeSelection onselection={GetCustomerData}></TimeSelection></>
  }else if(AppState===5){
    currentPage = <><Offers></Offers>
    <MyProgressBar prog={99}></MyProgressBar>
    <DataReview userdata={data}></DataReview></>
    buttonName = 'Proceed To Payment';
  }else if(AppState===6){
    currentPage = <><Offers></Offers>
    <MyProgressBar prog={100}></MyProgressBar>
    <Payment></Payment></>
  }else if(AppState===6.5){
    currentPage = <><FawryPayment></FawryPayment></>
    buttonName = 'Confirm';
  }else if(AppState===7){
    currentPage = <><ThanksView></ThanksView></>
  }

  const handleClick = ()=>{
    setData({...data,...d});
    if(AppState===3){
      if(d.Place==='Home Visit'){
        setAppState(current => current + 0.5);
      }else{
        setAppState(current => current + 1);
      }
    }else if(AppState===6){
      if(d.payment==='Fawry'){
        setAppState(current => current+0.5);
      }else{
        
      }
    }else{
      setAppState(current => parseInt(current)+1);
    }
  }

  const handleBack = ()=>{
    if(AppState===7){
      setAppState(1);
    }else if(AppState===parseInt(AppState)){
      setAppState(current => current-1);
    }else{
      setAppState(current => current-0.5);
    }
  }

  return (
    <div className="d-flex flex-column App">
      {currentPage}
      <div className='p-3 f-row fixed-bottom'>
        <button className='btn Active-btn' onClick={handleClick} hidden={(AppState===7||AppState===6)}>
          {buttonName}
        </button>
      </div>
      <div className='position-fixed p-2'>
        <button className='btn bk-btn'>
          <i className="bi bi-chevron-left fs-3" onClick={handleBack} hidden={(AppState===1)}></i>
        </button>
      </div>
    </div>
  );
}

export default App;
