/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { validateUser } from '../actions/validateUser';

class WelcomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSignup: false,
    };
  }

  render() {
    return (
      <div className="offside" id="welcome-page">
        <h2 id="welcome-header">
          Welcome to
        </h2>

        <img id="main-logo" alt="Perfect Grade Logo" src="https://i.imgur.com/yAkZCHP.png" />

        <p id="tagline">
          A tool for students to make sure the semester never gets too steep.
        </p>

        <LoginForm
          show={this.state.showLogin}
          history={this.props.history}
          currentUser={this.props.currentUser}
          coursesLoading={this.props.coursesLoading}
          onClick={() => this.setState({ ...this.state, showLogin: true })}
          onHide={() => this.setState({ ...this.state, showLogin: false })}
        />
        <SignupForm
          show={this.state.showSignup}
          history={this.props.history}
          onClick={() => this.setState({ ...this.state, showSignup: true })}
          onHide={() => this.setState({ ...this.state, showSignup: false })}
        />
        <ButtonGroup vertical id="welcome-btns">
          <Button
            variant="success"
            className="welcome-btn"
            onClick={() => this.setState({ ...this.state, showLogin: true })}
          >
            Log In
          </Button>
          <div className="button-break" />
          <Button
            variant="primary"
            className="welcome-btn"
            onClick={() => this.setState({ ...this.state, showSignup: true })}
          >
            Sign Up
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.userReducer.currentUser,
    coursesLoading: state.coursesReducer.requesting,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    validateUser: () => dispatch(validateUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
