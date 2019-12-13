/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';


class AboutPage extends Component {
  goHome = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="offside about-page">
        <h2>About Page</h2>
        <Button
          className="home-btn"
          variant="outline-primary"
          size="sm"
          onClick={this.goHome}
        >
          {'<<  Home'}
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(AboutPage);
