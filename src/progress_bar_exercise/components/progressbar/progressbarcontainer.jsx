import React from "react";
import { connect } from "react-redux";
import ProgressBar from "../progressbar/progressbar";

// TODO: setup redux state
function mapStateToProps(state, ownProps) {
    return {
        progressPercent: state.progressPercent,
    }
}
export default connect(mapStateToProps)(ProgressBar)