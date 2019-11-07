import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const NewCourseForm = (props) => {

  const handleSubmit = (e) => {
    e.preDefault();
    props.onHide()
    console.log('Submitting new Course')
  }


  return (
    <Modal
      {...props}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Add A New Course
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          onSubmit={handleSubmit}
        >
          <Form.Group controlId='newCourse'>
            <Form.Label>Course Title:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Underwater Basket Weaving 301'
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a course title.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant='success' type='submit'>
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default NewCourseForm
