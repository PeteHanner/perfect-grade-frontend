export default function coursesReducer(
  state = {
    courses: [],
    requesting: false,
  },
  action,
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
        courses: action.payload.sort((a, b) => ((a.id > b.id) ? 1 : -1)),
        requesting: false,
      };
    case 'CREATING_COURSE':
      return {
        ...state,
        courses: [...state.courses],
        requesting: true,
      };
    case 'COURSE_CREATED':
      return {
        ...state,
        courses: [...state.courses, action.payload].sort((a, b) => ((a.id > b.id) ? 1 : -1)),
        requesting: false,
      };
    case 'EDITING_COURSE':
      return {
        ...state,
        courses: [...state.courses],
        requesting: true,
      };
    case 'COURSE_EDITED':
      return {
        ...state,
        courses: state.courses.map((course) => {
          if (course.id === action.payload.id) {
            course = action.payload;
            return course;
          }
          return course;
        }).sort((a, b) => ((a.id > b.id) ? 1 : -1)),
        requesting: false,
      };

    case 'DELETING_COURSE':
      return {
        ...state,
        courses: [...state.courses],
        requesting: true,
      };
    case 'COURSE_DELETED':
      return {
        ...state,
        courses: [
          ...state.courses.filter((c) => c.id !== action.payload.id),
        ],
        requesting: false,
      };
    default:
      return state;
  }
}
