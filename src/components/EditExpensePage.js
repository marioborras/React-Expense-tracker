import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

//Section 12 - Lecture 125 - refactoring and making a test
//Refactor EditExpensePage to be class based component
//Setup mapDispatchToProps EditExpense and Remove Expense

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
    console.log('updated', expense);
  };
  onClick = expense => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
    console.log('deleted');
  };
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: data => dispatch(removeExpense(data))
});

const mapStatetoProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(EditExpensePage);
