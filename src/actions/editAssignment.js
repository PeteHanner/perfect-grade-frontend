import {fetchCourses} from './fetchCourses'

export function editAssignment(formData) {

  const configObj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  }

  return dispatch => {
    dispatch({ type: 'EDITING_ASSIGNMENT' });
    fetch(`http://localhost:3001/assignments/${formData.id}`, configObj)
      .then(r => r.json())
      .then(newAssignment => {
        dispatch({ type: 'ASSIGNMENT_EDITED', payload: newAssignment })
        dispatch({ type: 'CHANGES_MADE' })
        dispatch(fetchCourses())
      })
      .catch(error => alert(`There was an error (${error.message})`))
  }
}
