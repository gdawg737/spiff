import React from "react";
import Exercise from "../exercise/Exercise";
import ProgressBarContainer from "./components/progressbar/progressbarcontainer";
import StartRequestContainer from "./components/startrequest/startrequestcontainer";
import { createStore } from "redux";
import { appReducers } from "./reducers/appreducer";
import { updateProgress, updateUseBreakpoints } from "./actions/appactions";
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
  const store = createStore(appReducers, {
    progressPercent: 0,
    bIsFinished: false,
  });
  // TODO: update styling
  return (
    <Provider store={store} >
      <ProgressBarContainer 
      />
      <StartRequestContainer 
        breakpoints={[25,50]}
      />
      <br />
      <button
        style={{backgroundColor:"red"}}
        onClick={() => {
          store.dispatch(updateProgress(100));
        }}
      >Finish Request</button>
      <br />
      <input type="checkbox" id="toggleBreakpoints" name="toggleBreakpoints"
        onClick={(e) => {
          store.dispatch(updateUseBreakpoints(e.currentTarget.checked));
        }}
      />
      <label for="toggleBreakpoints">Use Breakpoints?</label>
    </Provider>
  );
};
