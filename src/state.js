import React, { createContext, useContext, useReducer } from "react";

const GlobalStateContext = createContext();

const initialState = {};

const GlobalStateReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  //eslint-disable-next-line
  const [state, dispatch] = useContext(GlobalStateContext);

  return {};
};

export default useGlobalState;
