/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editCourse } from '../actions/editCourse';
import { fetchCourses } from '../actions/fetchCourses';
import { deleteCourse } from '../actions/deleteCourse';

const EditCourseForm = (props) => {
  const [newTitle, setNewTitle] = React.useState(props.ogTitle);
  const {
    ogTitle,
    courseId,
    editCourse,
    deleteCourse,
    fetchCourses,
    staticContext,
    ...others
  } = props;

  const handleEditCourse = (e) => {
    e.preventDefault();
    const formData = {
      courseId: props.courseId,
      newTitle,
    };
    props.editCourse(formData);
    props.onHide();
  };

  const handleDeleteCourse = (e) => {
    e.preventDefault();
    const formData = {
      courseId: props.courseId,
    };
    props.deleteCourse(formData);
    props.history.push('/');
  };

  return (
    <Modal
      {...others}
      style={{ textAlign: 'center' }}
      centered
    >
      <Modal.Header closeButton>
        <h3>Edit Course</h3>
      </Modal.Header>
      <Modal.Body>
        {props.error
          ? (
            <p className="error-msg">
              Error:
              {' '}
              {props.error}
            </p>
          )
          : null}
        <Form
          onSubmit={handleEditCourse}
        >
          <Form.Group controlId="courseDescription">
            <Form.Label>Course Title: </Form.Label>
            <Form.Control
              required
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            style={{ float: 'right' }}
          >
            Submit
          </Button>
          <Button
            variant="danger"
            type="button"
            style={{ float: 'left' }}
            onClick={handleDeleteCourse}
          >
            Delete This Course
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

function mapStateToProps(state) {
  return {
    error: state.coursesReducer.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editCourse: (formData) => dispatch(editCourse(formData)),
    fetchCourses: () => dispatch(fetchCourses()),
    deleteCourse: (formData) => dispatch(deleteCourse(formData)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCourseForm));
