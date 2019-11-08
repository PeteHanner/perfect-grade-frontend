export function deleteCourse(formData) {

  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  }

  return dispatch => {
    dispatch({ type: 'DELETING_COURSE' });
    fetch(`http://localhost:3001/courses/${formData.courseId}`, configObj)
    .then(r => r.json())
    .then(deletedCourse => dispatch({ type: 'COURSE_DELETED', payload: deletedCourse }))
    .catch(error => alert(`There was an error (${error.message})`));
  }
}