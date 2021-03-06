/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import CoursePage from './containers/CoursePage';
import SchedulePage from './containers/SchedulePage';
import AboutPage from './containers/AboutPage';
import WelcomePage from './containers/WelcomePage';
import { validateUser } from './actions/validateUser';
import { fetchCourses } from './actions/fetchCourses';

class App extends Component {
  componentDidMount() {
    this.props.validateUser();
    if (!localStorage.token) {
      this.props.history.push('/welcome');
    } else {
      this.props.fetchCourses();
    }
  }

  render() {
    return (
      <>
        <div id="bg" />
        <Switch>
          <Route
            exact
            path="/welcome"
            component={WelcomePage}
          />
          <Route
            exact
            path="/courses/:id"
            component={CoursePage}
          />
          <Route
            exact
            path="/flattened"
            component={SchedulePage}
          />
          <Route
            exact
            path="/about"
            component={AboutPage}
          />
          <Route
            path="/"
            component={HomePage}
          />
        </Switch>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    assignments: state.assignments,
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    validateUser: () => dispatch(validateUser()),
    fetchCourses: () => dispatch(fetchCourses()),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
