import "../Style/DataReview.css";

function DataReview(props) {
  let DataItems = [];
  if (props.userdata !== null) {
    for (const [key, value] of Object.entries(props.userdata)) {
      if (key === "nextState") continue;
      DataItems.push(
        <div key={key} className="data-item">
          <div className="data-property my-1">{key}</div>{" "}
          <div className="data-value">{value}</div>
        </div>
      );
    }
  }

  const clickHandler = () => {
    props.onselection({ nextState: 6 });
  };

  return (
    <div className="f-col h-100 justify-content-between appearing">
      <div className="p-4 w-100">
        <div className="font bold">Your Data</div>
        <div className="data-div mt-2 p-3">{DataItems}</div>
      </div>
      <div className="w-100 f-row p-3 ">
        <button className="btn Active-btn" onClick={clickHandler}>
          Proceed To Payment
        </button>
      </div>
    </div>
  );
}

export default DataReview;
