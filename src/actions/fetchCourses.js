import {createBrowserHistory} from 'history'

export function fetchCourses() {
  return dispatch => {
    dispatch({ type: 'REQUESTING_COURSES' });
    fetch('http://localhost:3001/courses')
    .then(r => {
      if (r.status !== 401) r.json()
    })
    .then(courses => {
      if (courses) {
        dispatch({ type: 'COURSES_LOADED', payload: courses })
      } else {
        const history = createBrowserHistory()
        history.push('/welcome')
      }
    })
    .catch(error => alert(`There was an error (${error.message})`))
  };
}
