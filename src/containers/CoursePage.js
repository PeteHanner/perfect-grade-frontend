import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import CourseSchedule from '../components/CourseSchedule'
import CourseSidebar from '../components/CourseSidebar'


class CoursePage extends Component {

  render() {
    return (
      <Fragment>
        <h2>Course Page</h2>
        <CourseSchedule />
        <CourseSidebar class='sidenav' />
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { courses: state.courses }
}

export default connect(mapStateToProps)(CoursePage)