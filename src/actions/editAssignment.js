/* eslint-disable import/prefer-default-export */
import { fetchCourses } from './fetchCourses';

export function editAssignment(formData) {
  const authToken = localStorage.token;

  const configObj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
    body: JSON.stringify(formData),
  };

  return (dispatch) => {
    dispatch({ type: 'EDITING_ASSIGNMENT' });
    fetch(`http://localhost:3001/assignments/${formData.id}`, configObj)
      .then((r) => r.json())
      .then((newAssignment) => {
        dispatch({ type: 'ASSIGNMENT_EDITED', payload: newAssignment });
        dispatch({ type: 'CHANGES_MADE' });
        dispatch(fetchCourses());
      })
      .catch((error) => {
        dispatch({ type: 'BAD_REQUEST', payload: error.message });
      });
  };
}
