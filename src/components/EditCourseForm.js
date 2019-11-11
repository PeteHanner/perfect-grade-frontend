import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import {editCourse} from '../actions/editCourse'
import {fetchCourses} from '../actions/fetchCourses'

const EditCourseForm = (props) => {
  const [newTitle, setNewTitle] = React.useState(props.ogTitle)
  const {ogTitle, courseId, editCourse, ...others} = props

  const handleEditCourse = (e) => {
    e.preventDefault()
    const formData = {
      courseId: props.courseId,
      newTitle: newTitle
    }
    props.editCourse(formData)
    props.onHide()
  }

  return (
    <Modal
      {...others}
      style={{textAlign:'center'}}
      centered
    >
      <Modal.Header closeButton>
        <h3>Edit Course</h3>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={handleEditCourse}
        >
          <Form.Group controlId='courseDescription'>
            <Form.Label>Course Title: </Form.Label>
            <Form.Control
              required
              type='text'
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
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
            // onClick={handleDeleteCourse}
          >
            Delete This Course
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    editCourse: formData => dispatch(editCourse(formData)),
    fetchCourses: () => dispatch(fetchCourses())
  };
}

export default connect(null, mapDispatchToProps)(EditCourseForm)
