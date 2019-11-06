import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'


class SchedulePage extends Component {

  render() {
    return (
      <div id='schedule-page' className='offside'>
        <h2>Schedule Page</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

export default connect(mapStateToProps)(SchedulePage)
