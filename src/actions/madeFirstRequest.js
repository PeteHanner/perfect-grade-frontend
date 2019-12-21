/* eslint-disable import/prefer-default-export */
export function madeFirstRequest() {
  return (dispatch) => dispatch({ type: 'FIRST_REQUEST_COMPLETE' });
}
