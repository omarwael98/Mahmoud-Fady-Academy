import React, { useState } from "react";
import "../Style/VisitLocation.css";

function VisitLocation(props) {
  const [Cities, setCities] = useState(["Cairo", "Alex", "Giza"]);
  const [location, setLocation] = useState({ Address: "", City: "", Info: "" });

  const addressInputHandler = (e) => {
    setLocation({ ...location, Address: e.target.value });
  };

  const extraInfoInputHandler = (e) => {
    setLocation({ ...location, Info: e.target.value });
  };

  const clickHandler = () => {
    props.onselection({ ...location, nextState: 4 });
  };

  const CitiesList = [];
  for (let i = 0; i < Cities.length; i++) {
    CitiesList[i] = (
      <li
        key={i}
        className="dropdown-item"
        onClick={(e) => setLocation({ ...location, City: Cities[i] })}
      >
        {Cities[i]}
      </li>
    );
  }

  return (
    <div className="f-col h-100 justify-content-between appearing">
      <div className="f-col w-100">
        <div className="align-self-start bold my-2 ms-3 font">
          Visiting Location
        </div>
        <div className="font px-4 py-2 w-100 ">
          <div className="">
            <label>Address</label>
            <input
              className="form-control"
              type="text"
              name="address"
              placeholder="St Name/Building Number"
              value={location.Address}
              onChange={addressInputHandler}
            />
          </div>
          <div className="input-group my-2 d-flex flex-column">
            <label>City</label>
            <button
              className={
                "btn city-dropdown dropdown-toggle " +
                (location.City === "" ? "" : " city-selected")
              }
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {location.City === "" ? "City" : location.City}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">{CitiesList}</ul>
          </div>
          <div className="">
            <label>Additional Info</label>
            <input
              className="form-control"
              type="numeric"
              name="extra"
              placeholder="Additional Info"
              value={location.Info}
              onChange={extraInfoInputHandler}
            />
          </div>
        </div>
      </div>
      <div className="w-100 f-row p-3 ">
        <button
          className="btn Active-btn"
          disabled={location.Address === "" || location.City === ""}
          onClick={clickHandler}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default VisitLocation;
