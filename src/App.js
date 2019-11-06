import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './containers/HomePage'
import CoursePage from './containers/CoursePage'
import SchedulePage from './containers/SchedulePage'
import { fetchAssignments } from './actions/fetchAssignments'
import { fetchCourses } from './actions/fetchCourses'

class App extends Component {

  componentDidMount() {
    this.props.fetchAssignments()
    this.props.fetchCourses()
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact path='/'
            component={HomePage}
          />
          <Route
            exact path='/courses/:id'
            component={CoursePage}
          />
        <Route
          exact path ='/flattened'
          component={SchedulePage}
        />
        </Switch>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    assignments: state.assignments,
    courses: state.courses
  }
}

function matchDispatchToProps(dispatch) {
  return {
    fetchAssignments: () => dispatch(fetchAssignments()),
    fetchCourses: () => dispatch(fetchCourses())
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
