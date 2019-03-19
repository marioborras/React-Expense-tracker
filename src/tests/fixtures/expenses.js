import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Gum',
    note: 'some note about gum',
    amount: 195,
    createdAt: 0
  },
  {
    id: '2',
    description: 'rent',
    note: 'some note about rent',
    amount: 109500,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'credit card',
    note: 'some note about the credit card',
    amount: 4500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];
