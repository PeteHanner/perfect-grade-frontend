import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

const SignupForm = (props) => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirm, setPasswordConfirm] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onHide();
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


export default connect(null, null)(SignupForm);
