import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import CourseCards from '../components/CourseCards'


class HomePage extends Component {

  render() {
    return (
      <Fragment>
        <h2>Home Page</h2>
        <CourseCards
          courses={this.props.courses}
        />
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { courses: state.coursesReducer.courses }
}

export default connect(mapStateToProps)(HomePage)