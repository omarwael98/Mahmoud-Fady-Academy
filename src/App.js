import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Style/App.css";
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

function App() {
  const [AppState, setAppState] = useState(1);
  const [data, setData] = useState({});

  const GetCustomerData = (Info) => {
    setData({ ...data, ...Info });
    setAppState(Info.nextState);
  };

  let currentPage,
    buttonName = "Continue";
  if (AppState === 1) {
    currentPage = (
      <>
        <Offers />
        <MyProgressBar prog={0} />
        <DogSelection onselection={GetCustomerData} />
      </>
    );
  } else if (AppState === 2) {
    currentPage = (
      <>
        <Offers />
        <MyProgressBar prog={20} />
        <ProblemSelection onselection={GetCustomerData} />
      </>
    );
  } else if (AppState === 3) {
    currentPage = (
      <>
        <Offers />
        <MyProgressBar prog={40} />
        <PlaceSelection onselection={GetCustomerData} />
      </>
    );
  } else if (AppState === 3.5) {
    currentPage = (
      <>
        <Offers />
        <MyProgressBar prog={50} />
        <VisitLocation onselection={GetCustomerData} />
      </>
    );
  } else if (AppState === 4) {
    currentPage = (
      <>
        <Offers />
        <MyProgressBar prog={60} />
        <TimeSelection onselection={GetCustomerData} />
      </>
    );
  } else if (AppState === 5) {
    currentPage = (
      <>
        <Offers />
        <MyProgressBar prog={80} />
        <DataReview userdata={data} onselection={GetCustomerData} />
      </>
    );
  } else if (AppState === 6) {
    currentPage = (
      <>
        <Offers />
        <MyProgressBar prog={100} />
        <Payment onselection={GetCustomerData} />
      </>
    );
  } else if (AppState === 6.5) {
    currentPage = <FawryPayment onselection={GetCustomerData} />;
  } else if (AppState === 7) {
    currentPage = <ThanksView />;
  }

  const handleBack = () => {
    if (AppState === 7) {
      setAppState(1);
    } else if (AppState === parseInt(AppState)) {
      setAppState((current) => current - 1);
    } else {
      setAppState((current) => current - 0.5);
    }
  };

  return (
    <div className="d-flex flex-column App">
      {currentPage}
      <div className="position-fixed px-2 py-3">
        <button className="btn bk-btn">
          <i
            className={
              "bi bi-chevron-left fs-1 " +
              (AppState == 6.5 || AppState == 7 ? " black" : "")
            }
            onClick={handleBack}
            hidden={AppState === 1}
          />
        </button>
      </div>
    </div>
  );
}

export default App;
