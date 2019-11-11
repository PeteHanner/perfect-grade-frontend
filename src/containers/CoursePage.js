import React, { Component } from 'react'
import { connect } from 'react-redux'
import CourseSchedule from '../components/CourseSchedule'
import CourseSidebar from '../components/CourseSidebar'
import EditCourseForm from '../components/EditCourseForm'
import { MDBIcon } from 'mdbreact';

class CoursePage extends Component {

  constructor() {
    super()
    this.state = {
      showEditForm: false
    }
  }

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

  showCourseForm = () => {
    this.setState({
      showEditForm: true
    })
  }

  render() {
    return (
      this.props.courses.length > 0 ?
      <div id='course-page' className='offside'>
        <EditCourseForm
          show={this.state.showEditForm}
          ogTitle={this.courseTitle()}
          courses={this.props.courses}
          courseId={this.props.match.params.id}
          onHide={()=>this.setState({showEditForm:false})}
        />
        <h2 className='course-header'>
          {this.courseTitle()}
          <MDBIcon
            icon="pen"
            className="edit-icon"
            style={{fontSize:'2rem'}}
            onClick={this.showCourseForm}
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
