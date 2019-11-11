import React, { Component } from 'react'
import { connect } from 'react-redux'
import CourseSchedule from '../components/CourseSchedule'
import CourseSidebar from '../components/CourseSidebar'
import { MDBIcon } from 'mdbreact';

class CoursePage extends Component {

  courseTitle = () => {
    return this.props.courses.find(course => {
      return course.id === parseInt(this.props.match.params.id)
    }).name
  }

  assignments = () => {
    return this.props.courses.find(course => {
      return course.id === parseInt(this.props.match.params.id)
    }).assignments
  }

  render() {
    return (
      this.props.courses.length > 0 ?
      <div id='course-page' className='offside'>
        <h2 className='course-header'>
          {this.courseTitle()}
          <MDBIcon
            icon="pen"
            className="edit-icon"
            style={{fontSize:'2rem'}}
          />
        </h2>
        <CourseSchedule
          assignments={this.assignments()}
        />
        <CourseSidebar />
      </div> :
      null
    )
  }
}

function mapStateToProps(state) {
  return {
    courses: state.coursesReducer.courses
  }
}


export default connect(mapStateToProps)(CoursePage)
