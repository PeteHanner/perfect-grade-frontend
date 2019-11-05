import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import CourseSchedule from '../components/CourseSchedule'
import CourseSidebar from '../components/CourseSidebar'


class CoursePage extends Component {

  targetCourse = () =>

  render() {
    return (
      <Fragment>
        <h2>Course Page</h2>
        <CourseSchedule />
        <CourseSidebar />
      </Fragment>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.coursesReducer.courses
  }
}

export default connect(mapStateToProps)(CoursePage)

