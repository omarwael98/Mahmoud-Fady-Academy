import React, { useState } from "react";
import "../Style/PlaceSelection.css";

function PlaceSelection(props) {
  const [Selected, setSelected] = useState(null);
  const [VisitPrices, setVisitPrices] = useState([
    { type: "Home Visit", price: "600 EGP" },
    { type: "Academy Visit", price: "600 EGP" },
  ]);

  const selectPlaceHandler = (i) => {
    if (Selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  const clickHandler = () => {
    let data =
      Selected === null ? { Place: "" } : { Place: VisitPrices[Selected].type };
    data =
      Selected === 1 ? { ...data, nextState: 4 } : { ...data, nextState: 3.5 };
    props.onselection(data);
  };

  return (
    <div className="f-col p-2 w-100 h-100 justify-content-between appearing">
      <div className="f-col font w-100">
        <div className="align-self-start bold my-2 ms-3">
          Choose The Place Of The Visit
        </div>
        <div className="f-row flex-wrap w-100">
          <div
            className={
              "f-col text-center place-div container m-2 p-2 fs-5 " +
              (Selected === 1 ? " selected" : "")
            }
            onClick={(e) => {
              selectPlaceHandler(1);
            }}
          >
            <img src="../images/AcademyV.png"></img>
            Academy Visit
            <div className="price-div fs-3">{VisitPrices[1].price}</div>
          </div>
          <div
            className={
              "f-col text-center place-div container m-2 p-2 fs-5 " +
              (Selected === 0 ? " selected" : "")
            }
            onClick={(e) => {
              selectPlaceHandler(0);
            }}
          >
            <i className="bi bi-house-door-fill home-icon"></i>
            Home Visit
            <div className="price-div fs-3">{VisitPrices[0].price}</div>
          </div>
        </div>
      </div>
      <div className="w-100 f-row p-3 ">
        <button
          className="btn Active-btn"
          disabled={Selected === null}
          onClick={clickHandler}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default PlaceSelection;
