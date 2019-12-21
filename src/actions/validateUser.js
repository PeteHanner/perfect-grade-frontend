/* eslint-disable import/prefer-default-export */

export const validateUser = () => async (dispatch) => {
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
    const r = await fetch('http://localhost:3001/profile', configObj);
    const data = await r.json();
    if (data.message) {
      localStorage.removeItem('token');
    } else {
      dispatch({ type: 'LOGGED_IN', payload: data.user });
    }
  }
};
