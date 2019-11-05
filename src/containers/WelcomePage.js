import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'


class WelcomePage extends Component {

  render() {
    return (
      <Fragment>
        <h2>Welcome Page</h2>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return { state }
}

export default connect(mapStateToProps)(HomePage)