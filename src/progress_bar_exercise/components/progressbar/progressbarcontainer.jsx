import React from "react";
import { connect } from "react-redux";
import ProgressBar from "../progressbar/progressbar";

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        progressPercent: state.progressPercent,
        bIsFinished: state.bIsFinished,
        bUseBreakpoints: state.bUseBreakpoints,
    }
}
export default connect(mapStateToProps)(ProgressBar)