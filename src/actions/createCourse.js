/* eslint-disable import/prefer-default-export */
export function createCourse(formData) {
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

  return (dispatch) => {
    dispatch({ type: 'CREATING_COURSE' });
    fetch('http://localhost:3001/courses', configObj)
      .then((r) => r.json())
      .then((newCourse) => {
        dispatch({ type: 'COURSE_CREATED', payload: newCourse });
        dispatch({ type: 'CHANGES_MADE' });
      })
      .catch((error) => {
        dispatch({ type: 'BAD_REQUEST', payload: error.message });
      });
  };
}
