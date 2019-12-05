/* eslint-disable import/prefer-default-export */
import { fetchCourses } from './fetchCourses';

export function deleteAssignment(formData) {
  const authToken = localStorage.token;

  const configObj = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };

  return (dispatch) => {
    dispatch({ type: 'DELETING_ASSIGNMENT' });
    fetch(`http://localhost:3001/assignments/${formData.asgmtId}`, configObj)
      .then((r) => r.json())
      .then((deletedAssignment) => {
        dispatch({ type: 'ASSIGNMENT_DELETED', payload: deletedAssignment });
        dispatch({ type: 'CHANGES_MADE' });
        dispatch(fetchCourses());
      })
      .catch((error) => alert(`There was an error (${error.message})`));
  };
}
