export default function cycleReducer(
  state = {
    firstRequest: true,
    freshRequest: false
  }, action
) {
  switch (action.type) {
    case 'FIRST_REQUEST_COMPLETE':
    return {
      ...state,
      firstRequest: false,
      freshRequest: false
    };
    case 'CHANGES_MADE':
      return {
        ...state,
        freshRequest: true
      };
    case 'REQUESTED_FRESH_CYCLE':
      return {
        ...state,
        freshRequest: false
      };
    default:
      return state;
  }
}
