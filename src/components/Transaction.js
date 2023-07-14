import React,{useContext} from "react";
import { GlobalContext } from "../context/GlobalState";


export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext) 
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount > 0 ? "plus" : "minus"}>
      {transaction.text}{" "}
      <span>
        {sign}Rp.{Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)} class="delete-btn">x</button>
    </li>
  );
};
