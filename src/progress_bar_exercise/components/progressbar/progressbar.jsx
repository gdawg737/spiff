import React from "react";

export default function ProgressBar() {
    
    // pseudo styled component
    const styleProps = {
        height: "6px",
        "borderStyle": "solid",
    }

    return (
        <div id="a123" style={styleProps} >
            <div style={{"backgroundColor":"green",height:"100%",width:"50%" /* TODO: props.progressPercent + "%"*/}} ></div>
        </div>
    )
}
//