export function createCourse(formData) {

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }
  console.log(configObj)
  return dispatch => {
    dispatch({ type: 'CREATING_COURSE' });
    fetch('http://localhost:3001/courses', configObj)
    .then(r => r.json())
    .then(data => console.log(data))
  }
}