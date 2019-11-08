export function fetchAssignments() {
  return dispatch => {
    dispatch({ type: 'REQUESTING_ASSIGNMENTS' });
    fetch('http://localhost:3001/assignments')
      .then(r => r.json())
      .then(asgmts => dispatch({ type: 'ASSIGNMENTS_LOADED', payload: asgmts }))
      .catch(error => alert(`There was an error (${error.message})`));
  };
}
