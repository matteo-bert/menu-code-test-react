const initialState = [
  { dinerId: 'diner1', courseOrdered: [] },
  { dinerId: 'diner2', courseOrdered: [] },
];

const orders = (state = initialState, { type } = {}) => {
  switch (type) {
    case 'ADD_TO_ORDER':
      // todo
      return state;
    case 'REMOVE_FROM_ORDER':
      // todo
      return state;
    case 'UPDATE_USER':
    default:
      return state;
  }
};

export default orders;
