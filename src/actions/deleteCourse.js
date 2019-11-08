export function deleteCourse(formData) {

  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  }

  console.log(configObj)

  return dispatch => {
    dispatch({ type: 'DELETING_COURSE' });
    fetch(`http://localhost:3001/courses/${formData.courseId}`, configObj)
    .then(r => r.json())
    .then(newCourse => dispatch({ type: 'COURSE_DELETED' }))
    .catch(error => alert(`There was an error (${error.message})`));
  }
}