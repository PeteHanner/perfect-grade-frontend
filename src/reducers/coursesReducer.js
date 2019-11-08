export default function coursesReducer(
  state = {
    courses: []
  },
  action
) {
  switch (action.type) {
    case 'REQUESTING_COURSES':
      return {
        ...state,
        courses: [...state.courses],
          requesting: true,
      };
    case 'COURSES_LOADED':
      return {
        ...state,
        courses: action.payload,
          requesting: false
      };
    case 'CREATING_COURSE':
      return {
        ...state,
        courses: [...state.courses],
          requesting: true
      };
    case 'COURSE_CREATED':
      // debugger
      return {
        ...state,
        courses: [...state.courses, action.payload],
          requesting: false
      };
    case 'DELETING_COURSE':
      return {
        ...state,
        courses: [...state.courses],
          requesting: true
      };
    case 'COURSE_DELETED':
      return {
        ...state,
        courses: [...state.courses],
          requesting: false
      };
    default:
      return state;
  }
}
