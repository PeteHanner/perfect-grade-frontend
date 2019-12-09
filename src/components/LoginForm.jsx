/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginUser';
import { fetchCourses } from '../actions/fetchCourses';

const LoginForm = (props) => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Send login credentials to backend
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      user: {
        name: userName,
        password,
      },
    };

    props.loginUser(formData);
  };


  // Fetch courses while redirecting from successful login
  useEffect(() => {
    if (props.currentUser) {
      props.fetchCourses();
    }
  }, [props.currentUser]);

  // Redirect to homepage once user is set and courses are fetched
  useEffect(() => {
    if (props.currentUser && !props.coursesLoading) {
      props.history.push('/');
    }
  }, [props.currentUser, props.coursesLoading]);

  return (
    <Modal
      onHide={props.onHide}
      show={props.show}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Log In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="error-msg">
          {props.errorMsg}
        </p>
        <Form
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Control
              required
              type="text"
              placeholder="username"
              autoComplete="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <Form.Control
              required
              type="password"
              placeholder="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

const mapStateToProps = (state) => ({
  loading: state.userReducer.requesting,
  errorMsg: state.userReducer.errorMsg,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (formData) => dispatch(loginUser(formData)),
  fetchCourses: () => dispatch(fetchCourses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
