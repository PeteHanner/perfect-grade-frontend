export function createCourse(formData) {

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }
  
  return dispatch => {
    dispatch({ type: 'CREATING_COURSE' });
    fetch('http://localhost:3001/courses', configObj)
    .then(r => r.json())
    .then(newCourse => dispatch({ type: 'COURSE_CREATED', payload: newCourse }))
    .catch(error => alert(`There was an error (${error.message})`));
  }
}