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

  render() {
    const loadingOrError = () => {
      if (this.props.error) {
        return (
          <h5 className="error-msg">
            Error:
            {' '}
            {this.props.error}
          </h5>
        );
      }
      return 'Loading...';
    };

    return (
      <div className="offside" id="home-page">
        <img id="main-logo" alt="Perfect Grade Logo" src="https://i.imgur.com/yAkZCHP.png" />
        {
          this.props.loading || !(this.props.currentUser)
            ? <h5>{loadingOrError()}</h5>
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
    error: state.coursesReducer.error,
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
