import React, { useContext }  from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  // get the amounts
  const amounts = transactions.map(transaction => transaction.amount)
  // get the income
  const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc+=item),0);
  // get the expense
  const expense = amounts
  .filter(item => item < 0)
  .reduce((acc, item) => (acc+=Math.abs(item)),0);
  
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Pemasukkan</h4>
          <p className="money plus">+Rp.{income}</p>
        </div>
        <div>
          <h4>Pengeluaran</h4>
          <p className="money minus">-Rp.{expense}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
