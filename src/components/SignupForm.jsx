/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { createUser } from '../actions/createUser';


const SignupForm = (props) => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === passwordConfirm) {
      const formData = {
        user: {
          name: userName,
          password,
        },
      };
      props.createUser(formData);
      if (localStorage.token) {
        props.onHide();
        props.history.push('/');
      }
    } else {
      props.passwordMismatch();
    }
  };

  const errorList = () => {
    if (props.errorMsg.length > 0 && props.show) {
      return props.errorMsg.map((msg) => <li key={msg}>{msg}</li>);
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
          Create User Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="error-msg">
          {errorList()}
        </ul>
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
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Form.Control
              required
              type="password"
              placeholder="confirm password"
              autoComplete="new-password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
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
  createUser: (formData) => dispatch(createUser(formData)),
  passwordMismatch: () => dispatch({ type: 'PASSWORD_MISMATCH' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
