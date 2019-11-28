/* eslint-disable import/prefer-default-export */
import { loginUser } from './loginUser';
import { fetchCourses } from './fetchCourses';

export const validateUser = () => (dispatch) => {
  const token = localStorage.token;

  const configObj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  if (token) {
    return fetch('http://localhost:3001/profile', configObj)
      .then((r) => r.json())
      .then((data) => {
        if (data.message) {
          // localStorage.removeItem('token');
          console.log('Bad token');
        } else {
          console.log(data);
          dispatch(loginUser({ user: data.user }));
        }
      })
      .then(() => dispatch(fetchCourses()));
  }
};
