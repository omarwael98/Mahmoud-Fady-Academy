import React from "react";
import {ProgressBar,Step} from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

function MyProgressBar(props) {
  return (
    <div className="f-row">
      <div className="w-50 mt-4 mb-1">
        <ProgressBar 
            percent={props.prog}
            filledBackground="#906729">

            <Step transition="scale">
              {({ accomplished }) => (
                <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  width: 20,
                  height: 20,
                  color: "white",
                  backgroundColor: accomplished ? "#906729" : "gray"
                }}
              >
                1
              </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  width: 20,
                  height: 20,
                  color: "white",
                  backgroundColor: accomplished ? "#906729" : "gray"
                }}
              >
                2
              </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  width: 20,
                  height: 20,
                  color: "white",
                  backgroundColor: accomplished ? "#906729" : "gray"
                }}
              >
                3
              </div>
              )}
            </Step>
            <Step transition="scale">
              {({ accomplished }) => (
                <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  width: 20,
                  height: 20,
                  color: "white",
                  backgroundColor: accomplished ? "#906729" : "gray"
                }}
              >
                4
              </div>
              )}
            </Step>
          </ProgressBar>
        </div>
      </div>
    );
}

export default MyProgressBar;
