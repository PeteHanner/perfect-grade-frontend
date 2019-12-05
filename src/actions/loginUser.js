/* eslint-disable import/prefer-default-export */
export const loginUser = (formData) => {
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(formData),
  };

  return (dispatch) => {
    dispatch({ type: 'LOGGING_IN' });
    fetch('http://localhost:3001/login', configObj)
      .then((r) => r.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem('token', data.jwt);
          dispatch({ type: 'LOGGED_IN', payload: data.user });
        } else {
          console.log('No such user');
        }
      });
  };
};
