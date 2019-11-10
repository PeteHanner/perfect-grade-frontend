import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const EditAssignmentForm = (props) => {
  const {dueDate, ...others} = props
  const [desc, setDesc] = React.useState(`${props.description}`)
  const [newDate, setNewDate] = React.useState(props.newDate)

  // console.log(props.description)
  return (
    <Modal
      {...others}
      centered
    >
      <Modal.Header closeButton>
        <h3>Edit Assignment</h3>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId='assignmentDescription'>
            <Form.Label>Description: </Form.Label>
            <Form.Control
              required
              type='text'
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        SUBMIT BUTTON GOES HERE
      </Modal.Footer>
    </Modal>
  )
}

export default EditAssignmentForm