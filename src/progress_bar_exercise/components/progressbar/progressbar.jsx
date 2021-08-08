import React from "react";

export default function ProgressBar(state) {
    // pseudo styled component
    const styleProps = {
        height: "6px",
        "borderStyle": "solid",
    }

    return (
        <div id="ProgressBarId" 
            onClick={() => {
                document.getElementById("ProgressBarId").style.borderWidth = "3px";
            }}
            style={{...styleProps, visibility:state.bIsFinished ? "hidden" : "visible"}} >
            <div style={{
                "backgroundColor":"green",
                height:"100%",
                width:state.progressPercent + "%",
            }}></div>
        </div>
    )
}