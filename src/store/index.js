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


/*
import React, { createContext, useContext, useReducer } from 'react';

const SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM';

const initialState = {
  activeItem: null
};

const appContext = createContext(initialState);
export const useAppStore = () => useContext(appContext);

const appStoreReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ACTIVE_ITEM:
      return { ...state, activeItem: payload };
    default:
      return state;
  }
};

export const AppStoreProvider = ({ propsToState, children }) => {
  const currentState = { ...initialState, ...propsToState };
  const [state, dispatch] = useReducer(appStoreReducer, currentState, undefined);
  return (
    <appContext.Provider value={[state, dispatch]}>
      {children}
    </appContext.Provider>
  )
};

/***
 * Usage
 */
/*
// Wrap Top Component in the Provider
<AppStoreProvider propsToState={{ activeItem: 'ITEM_B' }}>{children}</AppStoreProvider>

// Use Store (Read/Write) Wherever Needed
const [{activeItem}, dispatch] = useAppStore();
dispatch({
  type: SET_ACTIVE_ITEM,
  payload: {
    activeItem: 'ITEM_A'
  }
});
*/

*/
