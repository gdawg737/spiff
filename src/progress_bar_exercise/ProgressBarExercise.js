import React from "react";
import Exercise from "../exercise/Exercise";
// import ProgressBarContainer from "./components/progressbar/progressbarcontainer";
import ProgressBar from "./components/progressbar/progressbar";
import StartRequest from "./components/startrequest/startrequest";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./components/progressbar/progressbar.css";

const ProgressBarExercise = () => {
  return (
    <div className="progress-bar-exercise">
      <Exercise
        solution={<Solution />}
        specsUrl="https://github.com/SpiffInc/spiff_react_exercises/issues/1"
        title="Progress Bar Exercise"
      />
    </div>
  );
};

export default ProgressBarExercise;

// ----------------------------------------------------------------------------------

const Solution = () => {
  // TODO: update styling
  return (
    <React.Fragment>
      <ProgressBar
        props={{progressPercent:50}} />
      <StartRequest />
      <button
        style={{backgroundColor:"red"}}
        onClick={() => {
          // TODO: setup redux state
          // dispatch(updateProgress(100))
        }}
      >Finish Request</button>
    </React.Fragment>
  );
};
