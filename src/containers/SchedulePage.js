import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'


class SchedulePage extends Component {

  render() {
    return (
      <Fragment>
        <h2>Schedule Page</h2>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

export default connect(mapStateToProps)(HomePage)