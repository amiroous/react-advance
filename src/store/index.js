import React, { createContext, useContext, useReducer } from "react";
import { CHANGE_AUTH, CHANGE_THEME } from "store/actions";

const initialState = {
    authenticated: false,
    theme: 'primary'
};

const store = createContext(initialState);

const rootReducer = (state, action) => {
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

const StoreProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(rootReducer, initialState, undefined);
    return <store.Provider value={[state, dispatch]}>{children}</store.Provider>
};

export const useStateData = () => useContext(store);

export default StoreProvider;
