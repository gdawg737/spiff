import React from "react";
import { connect } from "react-redux";
import StartRequest from "./startrequest";

// TODO: setup redux state
function mapStateToProps(state, ownProps) {
    return {
        progressPercent: state.progressPercent,
        bIsFinished: state.bIsFinished,
    }
}
export default connect(mapStateToProps)(StartRequest)