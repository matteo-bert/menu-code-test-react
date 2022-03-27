const initialState = {
  diner1: [],
  diner2: [],
  total: 0,
};

const orders = (state = initialState, action) => {
  let newTotal;
  let newObj;
  let newState;

  switch (action.type) {
    case 'RESET_ORDER':
      return initialState;
    case 'ADD_TO_ORDER':
      newTotal = state.total + action.coursePrice;
      newObj = { id: action.courseId, name: action.courseName, price: action.coursePrice };
      newState = { ...state, total: newTotal };
      newState[action.orderId].push(newObj);
      return newState;
    case 'REMOVE_FROM_ORDER':
      // todo
      return state;
    default:
      return state;
  }
};

export default orders;
