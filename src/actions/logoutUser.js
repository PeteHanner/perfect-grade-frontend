/* eslint-disable import/prefer-default-export */
export function logoutUser() {
  return (dispatch) => {
    dispatch({ type: 'LOG_OUT' });
    localStorage.removeItem('token');
  }
}
