import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import { connect } from 'react-redux'
import {editAssignment} from '../actions/editAssignment'
import {deleteAssignment} from '../actions/deleteAssignment'
import { fetchCourses } from '../actions/fetchCourses'

const EditAssignmentForm = (props) => {
  const {dueDate, editAssignment, deleteAssignment, updateCourses, ...others} = props
  const [newDesc, setNewDesc] = React.useState('')
  const [newDate, setNewDate] = React.useState(new Date())

  React.useEffect(() => {
    setNewDesc(props.description);
    setNewDate(props.dueDate)
  }, [props])

  React.useEffect(() => {
    props.updateCourses()
  }, [props.assignments])

  const handleEditAssignment = (e) => {
    e.preventDefault()
    const formData = {
      id: props.id,
      newDesc: newDesc,
      newDate: moment(newDate).format('MMMM D YYYY'),
    }
    props.editAssignment(formData)
    props.onHide()
  }

  const handleDeleteAssignment = (e) => {
    e.preventDefault()
    const formData = {asgmtId: props.id}
    props.deleteAssignment(formData)
    props.onHide()
  }

  return (
    <Modal
      {...others}
      style={{textAlign:'center'}}
      centered
    >
      <Modal.Header closeButton>
        <h3>Edit Assignment</h3>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={handleEditAssignment}
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
              style={{display: 'inline'}}
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
          <Button
            variant='danger'
            type='button'
            style={{float:'left'}}
            onClick={handleDeleteAssignment}
          >
            Delete This Assignment
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

const mapStateToProps = state => {
  return {
    assignments: state.assignmentsReducer.assignments
  };
}

const mapDispatchToProps = dispatch => {
  return {
    editAssignment: formData => dispatch(editAssignment(formData)),
    deleteAssignment: formData => dispatch(deleteAssignment(formData)),
    updateCourses: () => dispatch(fetchCourses())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAssignmentForm)