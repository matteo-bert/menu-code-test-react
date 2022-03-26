import { combineReducers } from 'redux';

import menu from './menuReducer';
import orders from './orderReducer';

export default combineReducers({
  menu,
  orders,
});
