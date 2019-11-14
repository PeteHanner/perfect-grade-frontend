import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from './containers/HomePage'
import CoursePage from './containers/CoursePage'
import SchedulePage from './containers/SchedulePage'
import AboutPage from './containers/AboutPage'
import { fetchCourses } from './actions/fetchCourses'

class App extends Component {
  componentDidMount() {
    this.props.fetchCourses()
  }

  render() {
    return (
      <BrowserRouter id='app-interface'>
      <div id='bg'/>
        <Switch>
          <Route
            exact path='/courses/:id'
            component={CoursePage}
          />
          <Route
            exact path ='/flattened'
            component={SchedulePage}
          />
          <Route
            exact path ='/about'
            component={AboutPage}
          />
          <Route
            path='/'
            component={HomePage}
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

function mapDispatchToProps(dispatch) {
  return {
    fetchCourses: () => dispatch(fetchCourses())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
