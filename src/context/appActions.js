export const ACTIONS = {
    TOGGLE_CV: "TOGGLE_CV",
    HIDE_CV: "HIDE_CV"
}

export const toggleCv_ActionFn = () => {
    return {
        type: ACTIONS.TOGGLE_CV
    }
}

export const closeCv_ActionFn = () => {
    return {
        type: ACTIONS.HIDE_CV,
    }
}