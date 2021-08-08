import React, { useState, useEffect } from "react";
import { updateProgress, finishLoadingRequest } from "../../actions/appactions";

export default function StartRequest(store) {
    
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState();
    const [requestTimer, setRequestTimer] = useState(0);
    let timeoutThread = null;

    // TODO: bad solution. Need single source of truth
    // TODO: breakpoints should not be here. It should be in ProgressBar. Need to refactor
    const breakpointArray = store.breakpoints;

    // pseudo styled component
    const styleProps = {
        "background-color": "green",
    }
    
    // toggle "Start Request" button state
    useEffect(() => {
        if(loading) {
            setButtonText("Loading...");
            // TODO: better styling
            // styleProps["background-color"] = "grey";
            
            // update progress to 90% over 15 seconds
            // add 1% every 1000 / (90 / 15) ms. ~=167ms

            
            // breakpoint logic: pop breakpoint array. Slow "animation" to 5 frames around number by only
            // dispatching updates near the number
            if (breakpointArray.length > 0 && breakpointArray[0] < store.progressPercent) {
                breakpointArray.shift();
            }
            let currentBreakpoint = breakpointArray.length > 0 ? breakpointArray[0] : 0; 
            
            if (store.progressPercent < 90) {
                timeoutThread = window.setTimeout(() => {
                    let currentProgress = store.progressPercent + 1;
                    // TODO: breakpoint logic doesn't work. Preventing progress updates stops
                    // the event loops. Solution: need to two variables in state. 1 for render
                    // 1 for internal state

                    // if (currentBreakpoint
                    //     && currentProgress < (currentBreakpoint - 5)) {
                    //     return;
                    // }
                    store.dispatch(updateProgress(currentProgress));
                }, 167);
            }
        } else {
            setButtonText("Start Request");
            // styleProps["background-color"] = "green";
        }
    }, [loading, setButtonText, store.progressPercent]);

    useEffect(() => {
        if (store.progressPercent >= 100) {
            setLoading(false);
            window.clearTimeout(timeoutThread);
            
            // pseudo animation. Update progress bar to 100% over 1s. 5 frames
            // TODO: need a separate action/dependency. Setting progress to 100 will prevent "animation"
            // let frames = 5;
            // let remainingProgress = 100 - store.progressPercent;
            // const step = remainingProgress / 5;
            // let finishTimeThread = window.setInterval(() => {
            //     remainingProgress += step;
            //     store.dispatch(updateProgress(remainingProgress));
            //     if (frames-- <= 0) {
            //         window.clearTimeout(finishTimeThread);
            //     }
            // }, 200);

            // hide the ProgressBar after 3 seconds
            window.setTimeout(() => {
                store.dispatch(finishLoadingRequest(true));
            }, 3000)
        }
    }, [store.progressPercent]);
    


    return (
        <button
            style={styleProps}
            onClick={
                () => {
                    setLoading(true);
                }
            }>
                {buttonText}
        </button>
    )
}