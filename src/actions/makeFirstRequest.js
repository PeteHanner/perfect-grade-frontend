export function makeFirstRequest() {
  return dispatch => dispatch({type: 'FIRST_REQUEST_COMPLETE'})
}