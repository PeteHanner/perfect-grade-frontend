import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom';

const HomePageBtns = (props) => {

  const flattenAssignments = (e) => {
    e.preventDefault()
    props.history.push('flattened')
  }

  return(
    <ButtonGroup vertical id='home-page-btns'>
      <Button size='sm' variant='info'>How To Use PerfectGrade</Button>
      <br />
      <Button
        size='lg'
        variant='success'
        onClick={flattenAssignments}
      >
        <strong>Make The Grade!</strong>
      </Button>
    </ButtonGroup>
  )
}

export default withRouter(HomePageBtns)