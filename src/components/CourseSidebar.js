/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import NewAssignmentForm from './NewAssignmentForm';

const CourseSidebar = (props) => {
  const goHome = (e) => {
    e.preventDefault();
    props.history.push('/');
  };

  return (
    <div className="sidenav">
      <h4 id="add-header">Add An Assignment</h4>
      <p className="help-text">As you add assignments, make sure to enter the due date as assigned.</p>
      <p className="help-text">Your finalized flat schedule will automatically update everything with the dates you should actually complete the assignment.</p>
      <br />
      <NewAssignmentForm />
      <Button
        className="home-btn"
        variant="outline-primary"
        size="sm"
        onClick={goHome}
      >
        {'<<  Home'}
      </Button>
    </div>
  );
};

export default withRouter(CourseSidebar);
