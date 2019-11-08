import React from 'react'
import {withRouter} from 'react-router-dom'
import Form from 'react-bootstrap/Form'

const NewAssignmentForm = (props) => {

  const [asgmtDesc, setAsgmtDesc] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
  }

  return(
    <Form>
      <Form.Group controlId='newAssignment'>
        <Form.Label>Assignment Description: </Form.Label>
        <Form.Control
          type='text'
          placeholder="e.g. 'Read pp. 102-143'"
          required
          onChange={e=> setAsgmtDesc(e.target.value)}
        />
      </Form.Group>
    </Form>
  )
}

export default withRouter(NewAssignmentForm)