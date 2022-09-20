import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
import "../Style/MyProgressBar.css";

function MyProgressBar(props) {
  return (
    <div className="f-row">
      <div className="w-50 mt-4 mb-1">
        <ProgressBar percent={props.prog} filledBackground="var(--main-color)">
          <Step transition="scale">
            {({ accomplished }) => (
              <div className={accomplished ? "done" : "not-done"}>1</div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <div className={accomplished ? "done" : "not-done"}>2</div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <div className={accomplished ? "done" : "not-done"}>3</div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <div className={accomplished ? "done" : "not-done"}>4</div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <div className={accomplished ? "done" : "not-done"}>5</div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <div className={accomplished ? "done" : "not-done"}>6</div>
            )}
          </Step>
        </ProgressBar>
      </div>
    </div>
  );
}

export default MyProgressBar;
