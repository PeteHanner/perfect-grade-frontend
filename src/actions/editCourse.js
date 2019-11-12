import {fetchCourses} from './fetchCourses'

export function editCourse(formData) {

  const configObj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  }

  console.log(formData)

  return dispatch => {
    dispatch({type: 'EDITING_COURSE'});
    fetch(`http://localhost:3001/courses/${formData.courseId}`, configObj)
    .then(r => r.json())
    .then(newCourse => {
      dispatch({ type: 'COURSE_EDITED', payload: newCourse});
      dispatch({ type: 'CHANGES_MADE' })
      dispatch(fetchCourses())
    })
    .catch(error => alert(`There was an error (${error.message})`))
  }
}