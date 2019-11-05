export default function assignmentsReducer(
  state = {
    assignments: []
  },
  action
) {
  switch (action.type) {
    case 'REQUESTING_ASSIGNMENTS':
      return {
        ...state,
        assignments: [...state.assignments],
        requesting: true
      };
    case 'LOAD_ASSIGNMENTS':
      return {
        ...state,
        assignments: action.payload,
        requesting: false
      };
    default:
      return state;
  }
};
