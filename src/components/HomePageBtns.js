import React from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom';

const HomePageBtns = (props) => {

  const flattenAssignments = (e) => {
    e.preventDefault()
    props.history.push('flattened')
  }

  return (
    <ButtonToolbar id = 'home-page-btns' >
      <div>
        <Button
          size = 'lg'
          variant = 'success'
          onClick = { flattenAssignments }
          className = 'home-page-btn'
        >
          <strong> Make The Grade! </strong>
        </Button>
      </div>
      <div id='button-break'></div>
      <div>
        <Button
          size = 'sm'
          variant = 'info'
          className = 'home-page-btn'
        >
          How To Use Perfect Grade
        </Button>
      </div>
      </ButtonToolbar>
      )
}

export default withRouter(HomePageBtns)
