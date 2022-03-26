const initialState = [
  { courseId: 'starters', courseItems: [] },
  { courseId: 'mains', courseItems: [] },
  { courseId: 'desserts', courseItems: [] },
];

const menu = (state = initialState, { type } = {}) => {
  switch (type) {
    case 'INIT_MENU':
      // todo
      return state;
    default:
      return state;
  }
};

export default menu;
