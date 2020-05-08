import React, { createContext, useContext, useReducer } from "react";
import { rootReducer } from "store/reducers";

const initialState = {
    authenticated: false,
    theme: 'primary'
};

const store = createContext(initialState);

const StoreProvider = ({children}) => {
    const [ state, dispatch ] = useReducer(rootReducer, initialState, undefined);
    return <store.Provider value={[state, dispatch]}>{children}</store.Provider>
};

export const useStateData = () => useContext(store);

export default StoreProvider;
