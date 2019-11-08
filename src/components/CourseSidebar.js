import React from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router-dom";
import NewAssignmentForm from './NewAssignmentForm'

const CourseSidebar = (props) => {

  const goHome = (e) => {
    e.preventDefault()
    props.history.push(`/`)
  }

  return(
    <div className='sidenav'>
      <h4>Add An Assignment</h4>
      <NewAssignmentForm />
      <br/>
      <p className='help-text'>As you add assignments, make sure to enter the due date as assigned.</p>
      <p className='help-text'>Your finalized flat schedule will automatically update everything with the dates you should actually complete the assignment.</p>
      <Button
        className='home-btn'
        variant='outline-primary'
        size='sm'
        onClick={goHome}
      >
        {`<<  Home`}
      </Button>
    </div>
  )
}

export default withRouter(CourseSidebar)