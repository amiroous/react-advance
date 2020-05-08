import { CHANGE_AUTH, CHANGE_THEME } from "store/actions";

export const rootReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_AUTH:
            return { ...state, authenticated: payload }
        case CHANGE_THEME:
            return { ...state, theme: payload }
        default:
            return state;
    }
};