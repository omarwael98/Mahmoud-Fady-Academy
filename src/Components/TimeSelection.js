import { useState } from "react";
import Calendar from "react-calendar";
import SelectTimePopUp from "./SelectTimePopUp";
import "../Style/TimeSelection.css";

function TimeSelection(props) {
  const [modalShow, setModalShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const selectTime = (SelectedTime) => {
    setModalShow(false);
    props.onselection({
      Date: date.toDateString(),
      Time: SelectedTime,
      nextState: 5,
    });
  };

  const selectDate = (selectedDate) => {
    setDate(selectedDate);
    setModalShow(true);
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column font w-100 appearing">
      <div className="align-self-start bold my-3 ms-4">
        Choose Your Preferred Date
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap w-100">
        <Calendar onChange={selectDate} value={date}></Calendar>
        <SelectTimePopUp
          show={modalShow}
          onHide={() => setModalShow(false)}
          onaddpressed={selectTime}
          preferreddate={date.toDateString()}
        ></SelectTimePopUp>
      </div>
    </div>
  );
}

export default TimeSelection;
