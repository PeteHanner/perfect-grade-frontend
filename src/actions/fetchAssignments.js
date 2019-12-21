/* eslint-disable import/prefer-default-export */
import { madeFirstRequest } from './madeFirstRequest';
import { madeFreshRequest } from './madeFreshRequest';

export function fetchAssignments() {
  const authToken = localStorage.token;
  const configObj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  };
  return (dispatch, getState) => {
    let requestType = '';
    const { firstRequest } = getState().cycleReducer;

    if (firstRequest) {
      requestType = 'first';
    } else {
      requestType = 'fresh';
    }

    dispatch({ type: 'REQUESTING_ASSIGNMENTS' });
    fetch(`http://localhost:3001/assignments/${requestType}`, configObj)
      .then((r) => r.json())
      .then((asgmts) => {
        if (firstRequest) {
          dispatch(madeFirstRequest());
        } else {
          dispatch(madeFreshRequest());
        }
        dispatch({ type: 'ASSIGNMENTS_LOADED', payload: asgmts });
      })
      .catch((error) => {
        dispatch({ type: 'BAD_REQUEST', payload: error.message });
      });
  };
}
