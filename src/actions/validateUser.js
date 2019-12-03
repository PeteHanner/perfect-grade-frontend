/* eslint-disable import/prefer-default-export */

export const validateUser = () => (dispatch) => {
  const authToken = localStorage.token;

  const configObj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };

  if (authToken) {
    return fetch('http://localhost:3001/profile', configObj)
      .then((r) => r.json())
      .then((data) => {
        if (data.message) {
          localStorage.removeItem('token');
        } else {
          dispatch({ type: 'LOGGED_IN', payload: data.user });
        }
      });
  }
};
