import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import CourseCards from '../components/CourseCards'
import HomePageBtns from '../components/HomePageBtns'


class HomePage extends Component {

  render() {
    return (
      <div className='offside'>
        <h2>Home Page</h2>
        {
          this.props.loading ?
          <h5>Loading courses...</h5>
          :
          null
        }
        <CourseCards
          courses={this.props.courses}
        />
        <HomePageBtns/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    courses: state.coursesReducer.courses,
    loading: state.coursesReducer.requesting
  }
}

export default connect(mapStateToProps)(HomePage)