export function fetchAssignments() {
  return dispatch => {
    dispatch({ type: 'REQUESTING_ASSIGNMENTS' });
    fetch('http://localhost:3001/assignments')
      .then(r => r.json())
      .then(asgmts => dispatch({ type: 'LOAD_ASSIGNMENTS', payload: asgmts }));
  };
}
