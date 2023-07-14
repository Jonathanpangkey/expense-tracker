import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  // get the amounts of transaction
  const amounts = transactions.map((transaction) => transaction.amount);
  // get the total
  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Keseimbangan</h4>
      <h1>Rp.{total}</h1>
    </>
  );
};

export default Balance;
