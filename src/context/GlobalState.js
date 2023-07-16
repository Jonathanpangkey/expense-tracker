import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Update local storage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  // actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
