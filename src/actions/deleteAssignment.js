import {fetchCourses} from './fetchCourses'

export function deleteAssignment(formData) {

  const configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  }

  console.log(configObj, formData)

  return dispatch => {
    dispatch({ type: 'DELETING_ASSIGNMENT' });
    fetch(`http://localhost:3001/assignments/${formData.asgmtId}`, configObj)
    .then(r => r.json())
    .then(deletedAssignment => {
      dispatch({ type: 'ASSIGNMENT_DELETED', payload: deletedAssignment });
      dispatch({ type: 'CHANGES_MADE' });
      dispatch(fetchCourses())
    })
    .catch(error => alert(`There was an error (${error.message})`));
  }
}