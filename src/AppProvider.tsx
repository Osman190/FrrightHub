import React, { useState, useReducer, useEffect, useMemo } from "react";
import { reducer, initialState } from "./reducer";
import { ReducerInterface } from './types'

const AppContext = React.createContext({} as ReducerInterface);
export { AppContext };

let count = 0
const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  count++
  return (
    <AppContext.Provider value={{ state, dispatch }}>
    {children}
  </AppContext.Provider>
  )
}

export { AppProvider }