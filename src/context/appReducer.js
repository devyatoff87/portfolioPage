import { ACTIONS } from "./appActions";

export const appReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.TOGGLE_CV:
            return {
                ...state,
                cvShow: state.cvShow ? false : true
            }
        case ACTIONS.HIDE_CV:
            return {
                ...state,
                cvShow: false
            }
    }
}