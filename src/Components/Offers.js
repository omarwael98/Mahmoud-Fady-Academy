import { useState } from "react";
import CountDownTimer from "./CountDownTimer";
import "../Style/Offers.css";

function Offers() {
  const [offer, setOffer] = useState({
    description: "Book your session now and get",
    discount: "100 EGP OFF",
    dueTime: new Date(2022, 8, 23),
  });

  return (
    <div className="offers-div f-col justify-content-end pb-4">
      <h2 className="h2">Mahmoud Fady Academy</h2>
      <div className="bold fs-6">{offer.description}</div>
      <div className="offer-price bold fs-1">{offer.discount}</div>
      <CountDownTimer deadline={offer.dueTime} />
      <div className="time-units fs-6">DAYS HRS MINS SEC</div>
    </div>
  );
}

export default Offers;
