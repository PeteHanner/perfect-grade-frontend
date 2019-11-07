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
    // case 'CREATING_COURSE':
    //   return {
    //     ...state,
    //     courses: [...state.courses],
    //     requesting: true
    //   };
    // case 'COURSE_CREATED':
    //   return {
    //     ...state,
    //     courses: action.payload,
    //     requesting: false
    //   };
    default:
      return state;
  }
}
