import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AdjustedScheduleList from '../components/AdjustedScheduleList'


class SchedulePage extends Component {

  render() {
    return (
      <div id='schedule-page' className='offside'>
        <h2>Final Adjusted Schedule</h2>
      <AdjustedScheduleList
        assignments={this.props.assignments}
      />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    assignments: state.assignmentsReducer.assignments
  }
}

export default connect(mapStateToProps)(SchedulePage)
