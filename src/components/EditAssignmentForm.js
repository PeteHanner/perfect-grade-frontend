import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'


const EditAssignmentForm = (props) => {
  const {dueDate, ...others} = props
  const [newDesc, setNewDesc] = React.useState('')
  const [newDate, setNewDate] = React.useState(new Date())
  React.useEffect(() => {
    setNewDesc(props.description);
    setNewDate(props.dueDate)
  }, [props])

  const editAssignment = (e) => {
    e.preventDefault()
    const formData = {
      id: props.id,
      newDesc: newDesc
    }
    console.log(formData)
  }

  return (
    <Modal
      {...others}
      centered
    >
      <Modal.Header closeButton>
        <h3>Edit Assignment</h3>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={editAssignment}
        >
          <Form.Group controlId='assignmentDescription'>
            <Form.Label>Description: </Form.Label>
            <Form.Control
              required
              type='text'
              value={newDesc}
              onChange={e => setNewDesc(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='assignmentDate'>
            <DatePicker
              selected={newDate}
              onChange={date => {
                setNewDate(date);
              }}
              inline
            />
          </Form.Group>
          <Button
            variant='success'
            type='submit'
            style={{float:'right'}}
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EditAssignmentForm