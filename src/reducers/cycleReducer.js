export default function cycleReducer(
  state = {
    firstCycle: true,
    freshCycle: false
  }, action
) {
  switch (action.type) {
    case 'FIRST_REQUEST_COMPLETE':
    return {
      ...state,
      firstCycle: false
    };
    case 'CHANGES_MADE':
      return {
        ...state,
        freshCycle: true
      };
    case 'REQUESTED_FRESH_CYCLE':
      return {
        ...state,
        freshCycle: false
      };
    default:
      return state;
  }
}
