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
    case 'ASSIGNMENTS_LOADED':
      return {
        ...state,
        assignments: action.payload,
          requesting: false
      };
    case 'CREATING_ASSIGNMENT':
      return {
        ...state,
        assignments: [...state.assignments],
          requesting: true
      };
    case 'ASSIGNMENT_CREATED':
      return {
        ...state,
        assignments: [...state.assignments, action.payload],
          requesting: false
      };
    case 'EDITING_ASSIGNMENT':
      return {
        ...state,
        assignments: [...state.assignments],
          requesting: true,
      };
    case 'ASSIGNMENT_EDITED':
      return {
        ...state,
        assignments: [...state.assignments, action.payload],
        requesting: false
      };
    default:
      return state;
  }
};
