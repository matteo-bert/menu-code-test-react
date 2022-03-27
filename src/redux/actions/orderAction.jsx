export const addToOrder = (orderId, courseId, courseName, coursePrice) => ({
  type: 'ADD_TO_ORDER',
  orderId,
  courseId,
  courseName,
  coursePrice,
});

export const removeFromOrder = (orderId, courseId) => ({
  type: 'REMOVE_FROM_ORDER',
  orderId,
  courseId,
});
