import React from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Calendar from './Calendar'
import moment from 'moment'

const NewAssignmentForm = (props) => {

  const [asgmtDesc, setAsgmtDesc] = React.useState('')
  const [asgmtDate, setAsgmtDate] = React.useState(new Date())

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      description: asgmtDesc,
      dueDate: moment(asgmtDate).format('MMMM D YYYY'),
      courseId: props.match.params.id
    }
    setAsgmtDesc('')
    console.log(formData)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='newAssignment'>
        <Form.Label>Assignment Description: </Form.Label>
        <Form.Control
          type='text'
          placeholder="e.g. 'Read pp. 102-143'"
          required
          value={asgmtDesc}
          onChange={e=> setAsgmtDesc(e.target.value)}
        />
      </Form.Group>
      <Calendar/>
      <Button variant='success' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export default withRouter(NewAssignmentForm)
