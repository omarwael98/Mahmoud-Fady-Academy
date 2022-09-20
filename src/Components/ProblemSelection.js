import React, { useState } from "react";
import AddProblemPopUp from "./AddProblemPopUp";
import "../Style/ProblemSelection.css";

function ProblemSelection(props) {
  const [modalShow, setModalShow] = useState(false);
  const [Selected, setSelected] = useState(null);
  const [Problems, setProblems] = useState([
    "Hyperactive",
    "Toilet Out Of Place",
    "Tearing Clothes Or Furniture",
    "Hostile To Dog",
    "Hostile To People",
    "Biting",
    "Fear Of Dogs",
    "Fear Of People",
  ]);

  const selectProblemHandler = (i) => {
    if (Selected === i) {
      setSelected(null);
    } else {
      setSelected(i);
    }
  };

  const AddOtherProblems = (problem) => {
    if (problem != "") {
      setProblems((current) => [...current, problem]);
    }
    setModalShow(false);
  };

  const clickHandler = () => {
    let data =
      Selected === null
        ? { Problem: "", nextState: 3 }
        : { Problem: Problems[Selected], nextState: 3 };
    props.onselection(data);
  };

  let ProblemDisplay = [];
  for (let i = 0; i < Problems.length; i++) {
    ProblemDisplay[i] = (
      <div
        key={i}
        className={
          "f-row text-center fs-6 problem-div container m-2 p-2 " +
          (Selected === i ? " selected" : "")
        }
        onClick={(e) => {
          selectProblemHandler(i);
        }}
      >
        {Problems[i]}
      </div>
    );
  }

  return (
    <div className="f-col p-2 w-100 h-100 justify-content-between appearing">
      <div className="f-col font w-100">
        <div className="align-self-start bold my-2 ms-3">
          Choose Your Dog's Problem
        </div>
        <div className="f-row flex-wrap w-100">
          {ProblemDisplay}
          <div
            className="f-row text-center problem-div container m-2 p-2"
            onClick={(e) => {
              setModalShow(true);
            }}
          >
            Other
          </div>
          <AddProblemPopUp
            show={modalShow}
            onHide={() => setModalShow(false)}
            onaddpressed={AddOtherProblems}
          />
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

export default ProblemSelection;
