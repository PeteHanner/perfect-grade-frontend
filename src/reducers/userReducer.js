export default function coursesReducer(
  state = {
    currentUser: null,
    requesting: false,
  },
  action,
) {
  switch (action.type) {
    case 'LOGGING_IN':
      return {
        ...state,
        requesting: true,
      };
    case 'LOGGED_IN':
      return {
        ...state,
        currentUser: action.payload,
        requesting: false,
      };
    default:
      return state;
  }
}
