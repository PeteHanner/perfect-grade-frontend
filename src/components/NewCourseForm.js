/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { createCourse } from '../actions/createCourse';

const NewCourseForm = (props) => {
  const [courseTitle, setCourseTitle] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      userId: props.currentUserId,
      courseTitle,
    };

    props.createCourse(formData)
      .then((success) => {
        if (success) props.onHide();
      });
  };

  return (
    <Modal
      onHide={props.onHide}
      show={props.show}
      centered
      backdrop="static"
    >
      {props.error
        ? (
          <p className="error-msg">
            Error:
            {' '}
            {props.error}
          </p>
        )
        : null}
      <Modal.Header closeButton>
        <Modal.Title>
          Add A New Course
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={handleSubmit}
        >
          <Form.Group controlId="newCourse">
            <Form.Label>Course Title:</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g. Underwater Basket Weaving 301"
              value={courseTitle}
              required
              onChange={(e) => setCourseTitle(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

function mapStateToProps(state) {
  return {
    error: state.coursesReducer.error,
    currentUserId: state.userReducer.currentUser.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: (formData) => dispatch(createCourse(formData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCourseForm);
