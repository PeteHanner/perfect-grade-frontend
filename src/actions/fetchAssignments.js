import { madeFirstRequest } from './madeFirstRequest'
import { madeFreshRequest } from './madeFreshRequest'

export function fetchAssignments() {

  return (dispatch, getState) => {
    let requestType = ''
    const { firstRequest } = getState().cycleReducer

    if (firstRequest) {
      requestType = 'first'
    } else {
      requestType = 'fresh'
    }

    dispatch({ type: 'REQUESTING_ASSIGNMENTS' });
    fetch(`http://localhost:3001/assignments/${requestType}`)
      .then(r => r.json())
      .then(asgmts => {
        // // TODO: logic to set cycle state goes here
        if (firstRequest) {
          dispatch(madeFirstRequest())
        } else {
          dispatch(madeFreshRequest())
        }
        dispatch({ type: 'ASSIGNMENTS_LOADED', payload: asgmts })
      })
      .catch(error => alert(`There was an error (${error.message})`));
  };
}
