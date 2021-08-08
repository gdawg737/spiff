
export const updateProgress = (newProgress) => {
    return {
        type: "UPDATE_PROGRESS",
        payload: newProgress,
    }
}

export const finishLoadingRequest = (bIsFinished) => {
    return {
        type: "FINISH_LOADING_REQUEST",
        payload: bIsFinished,
    }
}

export const updateUseBreakpoints = (bUse) => {
    return {
        type: "UPDATE_USE_BREAKPOINTS",
        payload: bUse,
    }
}