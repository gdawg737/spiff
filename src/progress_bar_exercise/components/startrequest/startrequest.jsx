import React, { useState, useEffect } from "react";
import { updateProgress, finishLoadingRequest } from "../../actions/appactions";

export default function StartRequest(store) {
    
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState();
    const [requestTimer, setRequestTimer] = useState(0);
    let timeoutThread = null;

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
            if (store.progressPercent < 90) {
                timeoutThread = window.setTimeout(() => {
                    let currentProgress = store.progressPercent + (90 / 15);
                    store.dispatch(updateProgress(currentProgress));
                }, 1000);
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
            window.setTimeout(() => {
                debugger;
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