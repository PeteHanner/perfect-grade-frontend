import React, { Component } from 'react'
import { connect } from 'react-redux'
import CourseSchedule from '../components/CourseSchedule'
import CourseSidebar from '../components/CourseSidebar'
import EditCourseForm from '../components/EditCourseForm'
import { MDBIcon } from 'mdbreact';

class CoursePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showEditForm: false,
      course: null,
      courseReady: false
    }
  }

  // courseTitle = () => {
  //   if (!this.props.loading) {
  //     return this.props.courses.find(course => {
  //       return course.id === parseInt(this.props.match.params.id)
  //     }).name
  //   }
  // }

  componentDidMount() {
    this.setState({
      ...this.state,
      course: this.props.courses.find(course => {
        return course.id === parseInt(this.props.match.params.id)
      })
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.courses !== this.props.courses && this.props.courses.length > 0) {
      // debugger
      this.setState({
        ...this.state,
        course: this.props.courses.find(course => {
          return course.id === parseInt(this.props.match.params.id)
        })
      })
    }
  }

  // assignments = () => {
  //   return this.props.courses.find(course => {
  //     return course.id === parseInt(this.props.match.params.id)
  //   }).assignments
  // }

  showCourseForm = () => {
    this.setState({
      showEditForm: true
    })
  }

  render() {
    if (this.state.course) {
      return (
        <div id='course-page' className='offside'>
          <EditCourseForm
            show={this.state.showEditForm}
            ogTitle={this.state.course.name}
            courses={this.props.courses}
            courseId={this.props.match.params.id}
            onHide={()=>this.setState({showEditForm:false})}
          />
          <h2 className='course-header'>
            {this.state.course.name}
            <MDBIcon
              icon="pen"
              className="edit-icon"
              style={{fontSize:'2rem'}}
              onClick={this.showCourseForm}
            />
          </h2>
          <CourseSchedule
            assignments={this.state.course.assignments}
          />
          <CourseSidebar />
        </div>
      )
    } else {
      return (
        <h2>
          Loading...
        </h2>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    courses: state.coursesReducer.courses,
    loading: state.coursesReducer.requesting
  }
}

export default connect(mapStateToProps)(CoursePage)
