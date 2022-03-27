import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CurrencyContext from './CurrencyContext';

function OrderList({ orders }) {
  const currency = useContext(CurrencyContext);
  const list = orders.length
    ? orders.map((order) => (
        <li key={`${order.id}-${Math.random()}`}>
          {order.name} ({currency} {order.price.toFixed(2)})
        </li>
      ))
    : '';

  return <ul style={{ listStyleType: 'none' }}>{list}</ul>;
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(String).isRequired,
};

export default OrderList;
