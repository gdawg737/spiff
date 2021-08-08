import React from "react";
import { connect } from "react-redux";
import StartRequest from "./startrequest";

function mapStateToProps(state, ownProps) {
    return {
        progressPercent: state.progressPercent,
        bIsFinished: state.bIsFinished,
    }
}
export default connect(mapStateToProps)(StartRequest)