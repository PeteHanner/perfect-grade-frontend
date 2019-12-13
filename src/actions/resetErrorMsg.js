/* eslint-disable import/prefer-default-export */
export const resetErrorMsg = () => {
  return (dispatch) => {
    dispatch({ type: 'RESET_ERROR_MESSAGE' });
  };
};
