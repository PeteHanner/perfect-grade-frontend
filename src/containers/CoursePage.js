import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import CourseSchedule from '../components/CourseSchedule'
import CourseSidebar from '../components/CourseSidebar'

class CoursePage extends Component {

  constructor() {
    super()
    this.state = {
      courseTitle: '',
      assignments: []
    }
  }

  // set assignments for specified course on full load
  componentWillReceiveProps(nextProps) {

    if (nextProps.courses.length > 0) {
      this.setState({
        courseTitle: nextProps.courses.find(course => {
          return course.id === parseInt(this.props.match.params.id)
        }).name
      })

      let assignments = nextProps.courses.find(course => {
        return course.id === parseInt(this.props.match.params.id)
      }).assignments

      assignments = assignments.sort( (a,b) => {
        return new Date(a.og_date) - new Date(b.og_date);
      })

      this.setState({
        assignments: assignments
      });
    }
  }

  render() {
    return (
      <Fragment>
        <h2>{this.state.courseTitle}</h2>
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
