/* eslint-disable import/prefer-default-export */
export function logoutUser() {
  return (dispatch) => {
    dispatch({ type: 'LOG_OUT' });
    // dispatch({ type: })
    localStorage.removeItem('token');
  }
}
