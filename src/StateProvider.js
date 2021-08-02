import React, { createContext, useContext, useReducer } from "react";

// Prpares the dataLayer
export const StateContext = createContext();

// Wrap the app context
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data dataLayer
export const useStateValue = () => useContext(StateContext);
