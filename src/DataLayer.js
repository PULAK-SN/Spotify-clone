import React, { createContext, useContext, useReducer } from "react";

// prepering the data layer
export const DataLayerContext = createContext();

// this is the actual data layer
// this is one that wrape the <App />
export const DataLayer = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);
