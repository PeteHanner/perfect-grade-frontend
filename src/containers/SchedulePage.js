/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import AdjustedScheduleList from '../components/AdjustedScheduleList';
import ScheduleSidebar from '../components/ScheduleSidebar';
import { fetchAssignments } from '../actions/fetchAssignments';

class SchedulePage extends Component {
  constructor(props) {
    super(props);
    if (this.props.firstRequest || this.props.freshRequest) {
      this.props.fetchAssignments();
    }
  }

  render() {
    return (
      <div id="schedule-page" className="offside">
        <h2 className="course-header">Final Adjusted Schedule</h2>
        {
          this.props.loading
            ? (
              <>
                <h6>Magic elves are squishing your schedule</h6>
                <h6>Be patient please</h6>
                <h6>This takes a while and our elves are unionized</h6>
                <Spinner animation="border">
                  <span className="sr-only">Loading....</span>
                </Spinner>
              </>
            )
            : (
              <AdjustedScheduleList
                loading={this.props.loading}
                assignments={this.props.assignments}
              />
            )
        }
        <ScheduleSidebar
          assignments={this.props.assignments}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    assignments: state.assignmentsReducer.assignments,
    loading: state.assignmentsReducer.requesting,
    firstRequest: state.cycleReducer.firstRequest,
    freshRequest: state.cycleReducer.freshRequest,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAssignments: () => dispatch(fetchAssignments()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage);
