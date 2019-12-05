import React from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

const LogoutBtn = (props) => {
  const removeAuthToken = () => {
    localStorage.removeItem('token');
    props.history.push('/welcome');
  };

  return (
    <Button
      size="sm"
      variant="outline-danger"
      className="home-page-btn"
      onClick={removeAuthToken}
    >
      Log Out
    </Button>
  );
};

export default withRouter(LogoutBtn);
