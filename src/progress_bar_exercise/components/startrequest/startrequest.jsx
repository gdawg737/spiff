import React, { useState, useEffect } from "react";

export default function StartRequest(props) {
    
    const [loading, setLoading] = useState(false);
    const [buttonText, setButtonText] = useState();
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
            
            // update progress to 90 over 15 seconds
            timeoutThread = window.setInterval(() => {
                let currentProgress = props.progressPercent;
                currentProgress += (90 / 15);
                // TODO: setup redux state
                // dispatch(updateProgress(currentProgress));
                if (currentProgress == 90) {
                    window.clearTimeout(timeoutThread);
                }
            }, 1000);
        } else {
            setButtonText("Start Request");
            // styleProps["background-color"] = "green";
        }
    }, [loading, setButtonText]);

    useEffect(() => {
        if (props.progressPercent >= 100) {
            setLoading(false);
            window.clearTimeout(timeoutThread);
        }
    }, [props.progressPercent]);
    


    return (
        <button
            style={styleProps}
            // TODO: disable not in spec
            // disabled={loading}
            onClick={
                () => {
                    setLoading(true);
                }
            }>
                {buttonText}
        </button>
    )
}