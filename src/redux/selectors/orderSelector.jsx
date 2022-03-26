export const selectAllOrders = (state) => state.orders;

export const selectOrderById = (state, orderId) => {
  const order = state.orders.find((ord) => ord.id === Number(orderId));
  return order;
};
