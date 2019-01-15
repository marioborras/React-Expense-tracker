import { createStore, combineReducers } from 'redux';

// Expenses Reducer
const expensesReducerDefaultState = [];
const expenseReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
// Store Creation

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());
const demoState = {
  expenses: [
    {
      id: '123',
      description: 'January Mortgage',
      note: 'This was the final payment for that address',
      amount: 260000,
      createdAt: 0
    }
  ],
  filters: {
    text: 'mortgage',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};
