/* eslint-disable import/prefer-default-export */
export function madeFreshRequest() {
  return (dispatch) => dispatch({ type: 'REQUESTED_FRESH_CYCLE' });
}
