import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "123",
      description: "January Mortgage",
      note: "This was the final payment for that address",
      amount: 260000,
      createdAt: 0
    }
  ],
  filters: {
    text: "mortgage",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
