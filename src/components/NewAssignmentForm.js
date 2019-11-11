import React from 'react'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Calendar from './Calendar'
import moment from 'moment'
import { connect } from 'react-redux'
import { createAssignment } from '../actions/createAssignment'

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
    props.createAssignment(formData)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId='newAssignment'>
        <Form.Label><strong>Assignment Description: </strong></Form.Label>
        <Form.Control
          type='text'
          placeholder="e.g. 'Read pp. 102-143'"
          style={{maxWidth:'95%', display:'inline-block'}}
          required
          value={asgmtDesc}
          onChange={e=> setAsgmtDesc(e.target.value)}
        />
      </Form.Group>
      <Calendar
        setAsgmtDate={setAsgmtDate}
      />
      <Button variant='success' type='submit'>
        Submit
      </Button>
    </Form>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createAssignment: formData => dispatch(createAssignment(formData)),
  };
}

export default withRouter(connect(null, mapDispatchToProps)(NewAssignmentForm))
