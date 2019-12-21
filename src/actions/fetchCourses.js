/* eslint-disable import/prefer-default-export */
import { createBrowserHistory } from 'history';

export function fetchCourses() {
  const authToken = localStorage.token;
  const configObj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };
  return (dispatch) => {
    dispatch({ type: 'REQUESTING_COURSES' });
    fetch('http://localhost:3001/courses', configObj)
      .then((r) => {
        if (r.status !== 401) {
          return r.json();
        }
      })
      .then((courses) => {
        if (courses) {
          dispatch({ type: 'COURSES_LOADED', payload: courses });
        } else {
          const history = createBrowserHistory();
          history.push('/welcome');
        }
      })
      .catch((error) => {
        dispatch({ type: 'BAD_REQUEST', payload: error.message });
      });
  };
}
