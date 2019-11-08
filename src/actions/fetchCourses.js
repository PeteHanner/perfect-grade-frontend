export function fetchCourses() {
  return dispatch => {
    dispatch({ type: 'REQUESTING_COURSES' });
    fetch('http://localhost:3001/courses')
      .then(r => r.json())
      .then(courses => dispatch({ type: 'COURSES_LOADED', payload: courses }))
      .catch(error => alert(`There was an error (${error.message})`));
  };
}
