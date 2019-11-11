export function madeFreshRequest() {
  return dispatch => dispatch({type: 'REQUESTED_FRESH_CYCLE'})
}