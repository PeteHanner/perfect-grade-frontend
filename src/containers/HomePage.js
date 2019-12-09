/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CourseCards from '../components/CourseCards';
import HomePageBtns from '../components/HomePageBtns';
import { fetchCourses } from '../actions/fetchCourses';

class HomePage extends Component {
  componentDidMount() {
    if (localStorage.token) {
      this.props.fetchCourses()
    } else {
      this.props.history.push('/welcome')
    }
  }

  render() {
    return (
      <div className="offside" id="home-page">
        <img id="main-logo" alt="Perfect Grade Logo" src="https://i.imgur.com/yAkZCHP.png" />
        {
          this.props.loading || !(this.props.currentUser)
            ? <h5>Loading...</h5>
            : (
              <>
                <CourseCards
                  courses={this.props.courses}
                />
                <HomePageBtns />
              </>
            )
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.userReducer.currentUser,
    courses: state.coursesReducer.courses,
    loading: state.coursesReducer.requesting,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCourses: () => dispatch(fetchCourses()),
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomePage),
);
