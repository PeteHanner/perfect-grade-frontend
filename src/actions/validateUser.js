/* eslint-disable import/prefer-default-export */
import { loginUser } from './loginUser'
import { fetchCourses } from './fetchCourses';

export const validateUser = () => (dispatch) => {
  const { token } = localStorage;

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
          localStorage.removeItem('token');
        } else {
          console.log(data);
          dispatch(fetchCourses());
          dispatch(loginUser(data.user));
        }
      });
  }
};
