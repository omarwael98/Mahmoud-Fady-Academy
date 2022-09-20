import { useState } from "react";
import "../Style/Payment.css";

function Payment(props) {
  const [offer, setOffer] = useState({
    desc: "Pay Now And Get",
    discount: "100 EGP Off",
    oldPrice: "400.00 EGP",
    newPrice: "300.00 EGP",
    homeVisitPrice: "400.00 EGP",
  });

  const handleCreditcardPayment = () => {};

  const handleFawryPayment = () => {
    props.onselection({ nextState: 6.5 });
  };

  const handleVodafoneCashPayment = () => {};

  const handleCashOnSpot = () => {
    props.onselection({ nextState: 7 });
  };

  return (
    <div className="f-col py-3 px-4 appearing">
      <div className="f-col">
        <div className="f-col">
          <div className="f-row font bold fs-4">{offer.desc}</div>
          <div className="f-row price bold fs-4">{offer.discount}</div>
        </div>
        <div className="f-col mt-3">
          <del className="f-row">{offer.oldPrice}</del>
          <div className="f-row font bold fs-3">{offer.newPrice}</div>
        </div>
      </div>
      <div className="f-col mt-3 w-100">
        <button
          className="btn Active-btn m-2 f-row justify-content-between py-3 px-3 fs-5"
          onClick={handleCreditcardPayment}
        >
          <div className="fs-5">
            <i className="bi bi-credit-card-2-front"></i> Credit Card{" "}
          </div>
          {offer.newPrice}
        </button>
        <button
          className="btn Active-btn m-2 f-row justify-content-between  py-3 px-3 fs-5"
          onClick={handleFawryPayment}
        >
          <img src="../images/fawryicon.jpg"></img>
          {offer.newPrice}
        </button>
        <button
          className="btn Active-btn m-2 f-row justify-content-between  py-3 px-3 fs-5"
          onClick={handleVodafoneCashPayment}
        >
          <img src="../images/vodafonecashicon.png"></img>
          {offer.newPrice}
        </button>
      </div>
      <div className="f-col my-3">
        <div className="f-row font bold fs-5">Cash On Spot</div>
        <div className="f-row font bold fs-4">{offer.homeVisitPrice}</div>
      </div>
      <button className="btn my-btn-outline py-3" onClick={handleCashOnSpot}>
        Cash On Spot
      </button>
    </div>
  );
}

export default Payment;
