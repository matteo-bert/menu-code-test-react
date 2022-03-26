export const addToOrder = (orderId, courseId) => ({
  type: 'ADD_TO_ORDER',
  orderId,
  courseId,
});

export const removeFromOrder = (orderId, courseId) => ({
  type: 'REMOVE_FROM_ORDER',
  orderId,
  courseId,
});
