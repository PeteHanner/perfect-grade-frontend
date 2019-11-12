export default function assignmentsReducer(
  state = {
    assignments: [],
    requesting: false
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
    case 'DELETING_ASSIGNMENT':
      return {
        ...state,
        assignments: [...state.assignments],
          requesting: true
      };
    case 'ASSIGNMENT_DELETED':
    return {
      ...state,
      assignments: [...state.assignments.filter(a => a.id !== action.payload.id)],
      requesting: false
    };
    default:
      return state;
  }
};
