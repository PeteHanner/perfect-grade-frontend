import React from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router-dom";

const ScheduleSideBar = (props) => {

  const goHome = (e) => {
    e.preventDefault()
    props.history.push(`/`)
  }

  return(
    <div className='sidenav'>
      <h4>Export To App</h4>
      <Button
        variant='outline-primary'
        size='sm'
        onClick={goHome}
      >
        {`<<  Home`}
      </Button>
    </div>
  )
}

export default withRouter(ScheduleSideBar)