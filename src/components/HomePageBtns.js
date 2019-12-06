/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';

const HomePageBtns = (props) => {
  const flattenAssignments = (e) => {
    e.preventDefault();
    props.history.push('flattened');
  };

  const goToAboutPage = (e) => {
    e.preventDefault();
    props.history.push('about');
  };

  return (
    <ButtonToolbar id="home-page-btns">
      <div>
        <Button
          size="lg"
          variant="success"
          onClick={flattenAssignments}
          className="home-page-btn"
        >
          <strong> Make The Grade! </strong>
        </Button>
      </div>
      <div id="button-break" />
      <div>
        <Button
          size="sm"
          variant="info"
          className="home-page-btn"
          onClick={goToAboutPage}
        >
          How To Use Perfect Grade
        </Button>
        <div>
          <LogoutBtn />
        </div>
      </div>
    </ButtonToolbar>
  );
};

export default withRouter(HomePageBtns);
