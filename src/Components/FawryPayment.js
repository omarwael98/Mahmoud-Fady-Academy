import { useState } from "react";
import "../Style/FawryPayment.css";

Date.prototype.addHours = function (h) {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

function FawryPayment(props) {
  const [code, setCode] = useState("80825857");
  const now = new Date().addHours(3);
  const deadline = now.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const clickHandler = () => {
    props.onselection({ nextState: 7 });
  };

  return (
    <div className="f-col h-100 justify-content-between appearing">
      <div className="f-col justify-content-start px-3 h-100 mt-5 ">
        <h1 className="font">Confirm Order</h1>
        <div className="f-col mt-5">
          <img src="../images/fawrypayment.png"></img>
          <div className="font text-center">
            Please Complete Your Payment During
            <strong> The Next 3 Hours (Before {deadline})</strong>
            To Confirm Your Reservation To Avoid Automatic Cancellation
          </div>
          <div className="fawry-code d-flex py-2 px-3 mt-3">
            <div className="font me-2">Fawry Code :</div>
            <div className="my-main-color bold">{code}</div>
          </div>
        </div>
      </div>
      <div className="w-100 f-row p-3 ">
        <button className="btn Active-btn" onClick={clickHandler}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default FawryPayment;
