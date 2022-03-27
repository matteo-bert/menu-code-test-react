export const initOrders = () => ({
  type: 'INIT_ORDER',
});

export const addToOrder = (orderId, courseCategory, courseId, courseName, coursePrice) => ({
  type: 'ADD_TO_ORDER',
  orderId,
  courseCategory,
  courseId,
  courseName,
  coursePrice,
});

export const removeFromOrder = (orderId, courseId) => ({
  type: 'REMOVE_FROM_ORDER',
  orderId,
  courseId,
});
