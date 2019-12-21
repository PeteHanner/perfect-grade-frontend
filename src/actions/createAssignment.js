/* eslint-disable import/prefer-default-export */
import { fetchCourses } from './fetchCourses';

export function createAssignment(formData) {
  const authToken = localStorage.token;

  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(formData),
  };

  // Send new assignment to server with auth token
  return (dispatch) => {
    dispatch({ type: 'CREATING_ASSIGNMENT' });
    fetch('http://localhost:3001/assignments', configObj)
      .then((r) => r.json())
      .then((newAssignment) => {
        dispatch({ type: 'ASSIGNMENT_CREATED', payload: newAssignment });
        dispatch({ type: 'CHANGES_MADE' });
        dispatch(fetchCourses());
      })
      .catch((error) => {
        dispatch({ type: 'BAD_REQUEST', payload: error.message });
      });
  };
}
