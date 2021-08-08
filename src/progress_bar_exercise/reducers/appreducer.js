
export function appReducers(state = {}, action = {}) {
    switch(action.type) {
        case "UPDATE_PROGRESS":
            return {
                ...state,
                progressPercent: action.payload,
            }
        case "FINISH_LOADING_REQUEST":
            return {
                ...state,
                bIsFinished: action.payload,
            }
        case "UPDATE_USE_BREAKPOINTS":
            return {
                ...state,
                bUseBreakpoints: action.payload,
            }
        default:
            return state;
    }
};