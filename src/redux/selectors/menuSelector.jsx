export const selectAllMenu = (state) => state.menu;

export const selectMenuByCourse = (state, courseId) => {
  const menuCourse = state.menu.find((course) => course.id === Number(courseId));
  return menuCourse;
};
