export default function coursesReducer(
  state = {
    courses: [],
    requesting: false,
    error: null,
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
        error: null,
      };
    case 'CREATING_COURSE':
      return {
        ...state,
        requesting: true,
      };
    case 'COURSE_CREATED':
      return {
        ...state,
        courses: [...state.courses, action.payload].sort((a, b) => ((a.id > b.id) ? 1 : -1)),
        requesting: false,
        error: null,
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
            const newCourse = action.payload;
            return newCourse;
          }
          return course;
        }).sort((a, b) => ((a.id > b.id) ? 1 : -1)),
        requesting: false,
        error: null,
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
        error: null,
      };
    case 'BAD_REQUEST':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
