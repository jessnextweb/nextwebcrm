// ExpensesTable.js
import React, { useState, useEffect } from 'react';
import { fetchExpenses } from '../../services/expenseService';

const ExpensesTable = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses().then((data) => setExpenses(data));
  }, []);

  return (
    <div className="expenses-table bg-white p-4 shadow-md rounded-md">
      <h2 className="text-lg font-semibold mb-4">Expenses</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Expense Type</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.type}</td>
              <td>{expense.vendor}</td>
              <td>${expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpensesTable;