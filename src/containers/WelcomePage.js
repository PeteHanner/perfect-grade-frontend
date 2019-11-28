/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import { validateUser } from '../actions/validateUser';

class WelcomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogin: false,
      showSignup: false
    }
  }

  componentDidMount() {
    this.props.validateUser();
    if (!localStorage.token) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="offside">
        <h2>
          Welcome to Perfect Grade
        </h2>

        <LoginForm
          show={this.state.showLogin}
          history={this.props.history}
          onClick={() => this.setState({ ...this.state, showLogin: true })}
          onHide={() => this.setState({ ...this.state, showLogin: false })}
        />
        <SignupForm
          show={this.state.showSignup}
          onClick={() => this.setState({ ...this.state, showSignup: true })}
          onHide={() => this.setState({ ...this.state, showSignup: false })}
        />

        <p onClick={() => this.setState({ ...this.state, showLogin: true })}>
          Log In
        </p>
        <p onClick={() => this.setState({ ...this.state, showSignup: true })}>
          Sign Up
        </p>
      </div >
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    validateUser: () => dispatch(validateUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
