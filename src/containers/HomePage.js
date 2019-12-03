/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CourseCards from '../components/CourseCards';
import HomePageBtns from '../components/HomePageBtns';
import { withRouter } from 'react-router-dom';
import { fetchCourses } from '../actions/fetchCourses';

// import { validateUser } from '../actions/validateUser';


class HomePage extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.currentUser && prevProps.currentUser !== this.props.currentUser) {
      this.props.fetchCourses()
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
