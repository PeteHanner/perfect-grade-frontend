/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MDBIcon } from 'mdbreact';
import CourseSchedule from '../components/CourseSchedule';
import CourseSidebar from '../components/CourseSidebar';
import EditCourseForm from '../components/EditCourseForm';

class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false,
      course: null,
      courseReady: false,
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      course: this.props.courses.find((course) => {
        return course.id === parseInt(this.props.match.params.id, 10);
      }),
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.courses !== this.props.courses && this.props.courses.length > 0) {
      this.setState({
        ...this.state,
        course: this.props.courses.find((course) => course.id === parseInt(this.props.match.params.id, 10)),
      });
    }
  }

  showCourseForm = () => {
    this.setState({
      showEditForm: true,
    });
  }

  render() {
    if (this.state.course) {
      return (
        <div id="course-page" className="offside">
          <EditCourseForm
            show={this.state.showEditForm}
            ogTitle={this.state.course.name}
            courses={this.props.courses}
            courseId={this.props.match.params.id}
            onHide={() => this.setState({ showEditForm: false })}
          />
          <h2 className="course-header">
            {this.state.course.name}
            <MDBIcon
              icon="pen"
              className="edit-icon"
              style={{ fontSize: '2rem' }}
              onClick={this.showCourseForm}
            />
          </h2>
          <CourseSchedule
            assignments={this.state.course.assignments}
          />
          <CourseSidebar />
        </div>
      );
    }
    return (
      <h2>
        Loading...
      </h2>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.coursesReducer.courses,
    loading: state.coursesReducer.requesting,
  };
}

export default connect(mapStateToProps)(CoursePage);
