export default function userReducer(
  state = {
    currentUser: null,
    requesting: false,
    errorMsg: '',
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
        errorMsg: '',
      };
    case 'BAD_LOGIN':
      return {
        ...state,
        requesting: false,
        errorMsg: 'Invalid username or password',
      };
    default:
      return state;
  }
}
