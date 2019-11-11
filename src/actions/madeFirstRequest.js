export function madeFirstRequest() {
  return dispatch => dispatch({type: 'FIRST_REQUEST_COMPLETE'})
}