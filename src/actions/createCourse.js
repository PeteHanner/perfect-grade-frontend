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

  return async (dispatch) => {
    dispatch({ type: 'CREATING_COURSE' });
    try {
      const r = await fetch('http://localhost:3001/courses', configObj);
      const newCourse = await r.json();
      dispatch({ type: 'COURSE_CREATED', payload: newCourse });
      dispatch({ type: 'CHANGES_MADE' });
      return true;
    } catch (error) {
      dispatch({ type: 'BAD_REQUEST', payload: error.message });
      return false;
    }
  };
}
