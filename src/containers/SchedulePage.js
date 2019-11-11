import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AdjustedScheduleList from '../components/AdjustedScheduleList'
import ScheduleSidebar from '../components/ScheduleSidebar'
import { fetchAssignments } from '../actions/fetchAssignments'
import Spinner from 'react-bootstrap/Spinner'

class SchedulePage extends Component {

  componentDidMount() {
    if (this.props.firstRequest || this.props.freshRequest) {
      this.props.fetchAssignments()
    }
  }

  render() {
    return (
      <div id='schedule-page' className='offside'>
      <h2>Final Adjusted Schedule</h2>
      {
        this.props.loading ?
        <Fragment>
          <h6>Magic elves are squishing your schedule</h6>
          <h6>Be patient please</h6>
          <h6>This takes a while and our elves are unionized</h6>
          <Spinner animation='border'>
            <span className='sr-only'>Loading....</span>
          </Spinner>
        </Fragment>
        :
        <AdjustedScheduleList
        assignments={this.props.assignments}
        />
      }
      <ScheduleSidebar />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    assignments: state.assignmentsReducer.assignments,
    loading: state.assignmentsReducer.requesting,
    firstRequest: state.cycleReducer.firstRequest,
    freshRequest: state.cycleReducer.freshRequest
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAssignments: () => dispatch(fetchAssignments()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchedulePage)
