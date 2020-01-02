export default function assignmentsReducer(
  state = {
    assignments: [],
    requesting: false,
    error: null,
  },
  action,
) {
  switch (action.type) {
    case 'REQUESTING_ASSIGNMENTS':
      return {
        ...state,
        requesting: true,
      };
    case 'ASSIGNMENTS_LOADED':
      return {
        ...state,
        assignments: action.payload,
        requesting: false,
        error: null,
      };
    case 'CREATING_ASSIGNMENT':
      return {
        ...state,
        requesting: true,
      };
    case 'ASSIGNMENT_CREATED':
      return {
        ...state,
        assignments: [...state.assignments, action.payload],
        requesting: false,
        error: null,
      };
    case 'EDITING_ASSIGNMENT':
      return {
        ...state,
        requesting: true,
      };
    case 'ASSIGNMENT_EDITED':
      return {
        ...state,
        assignments: [...state.assignments, action.payload],
        requesting: false,
        error: null,
      };
    case 'DELETING_ASSIGNMENT':
      return {
        ...state,
        requesting: true,
      };
    case 'ASSIGNMENT_DELETED':
      return {
        ...state,
        assignments: [...state.assignments.filter((a) => a.id !== action.payload.id)],
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
