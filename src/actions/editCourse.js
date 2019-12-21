/* eslint-disable import/prefer-default-export */
import { fetchCourses } from './fetchCourses';

export function editCourse(formData) {
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
    dispatch({ type: 'EDITING_COURSE' });
    fetch(`http://localhost:3001/courses/${formData.courseId}`, configObj)
      .then((r) => r.json())
      .then((newCourse) => {
        dispatch({ type: 'COURSE_EDITED', payload: newCourse });
        dispatch({ type: 'CHANGES_MADE' });
        dispatch(fetchCourses());
      })
      .catch((error) => {
        dispatch({ type: 'BAD_REQUEST', payload: error.message });
      });
  };
}
