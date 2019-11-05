import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import CourseSchedule from '../components/CourseSchedule'
import CourseSidebar from '../components/CourseSidebar'

class CoursePage extends Component {

  constructor() {
    super()
    this.state = {
      assignments: []
    }
  }

  // set assignments for specified course on full load
  componentWillReceiveProps(nextProps) {
    if (nextProps.courses.length > 0) {
      this.setState({
        assignments: nextProps.courses.find(course => {
          return course.id === parseInt(this.props.match.params.id)
        }).assignments
      });
    }
  }

  render() {
    return (
      <Fragment>
        <h2>Course Page</h2>
        <CourseSchedule
          assignments={this.state.assignments}
        />
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
