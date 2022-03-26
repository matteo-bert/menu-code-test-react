const initialState = [];

const menu = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case 'INIT_MENU':
      return payload;
    default:
      return state;
  }
};

export default menu;
