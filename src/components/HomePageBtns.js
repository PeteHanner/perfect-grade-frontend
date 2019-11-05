import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const HomePageBtns = () => {
  return(
    <ButtonGroup vertical id='home-page-btns'>
      <Button size='sm' variant='info'>How To Use PerfectGrade</Button>
      <br />
      <Button size='lg' variant='success'><strong>Make The Grade!</strong></Button>
    </ButtonGroup>
  )
}

export default HomePageBtns