/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { loginUser } from '../actions/loginUser';

const LoginForm = (props) => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      user: {
        name: userName,
        password,
      },
    };
    props.loginUser(formData);
    props.onHide();
    if (!localStorage.token) {
      props.history.push('/');
    }
  };

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

const mapDispatchToProps = (dispatch) => ({
  loginUser: (formData) => dispatch(loginUser(formData)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
