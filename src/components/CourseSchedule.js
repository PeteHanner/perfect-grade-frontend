import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { deleteCourse } from '../actions/deleteCourse'
import { MDBIcon } from "mdbreact";

const CourseSchedule = (props) => {

  const renderAssignments = () => {
    const uuidv1 = require('uuid/v1');

    return props.assignments.map(arr => {
      const date = arr[0]
      const asgmt_arr = arr[1]
      return (
        <Fragment key={uuidv1()}>
          <h4>{date}</h4>
          <ul>
            {asgmt_arr.map(a => {
              return(
                <Fragment key={uuidv1()}>
                  <li key={uuidv1()}>
                    {a.description}
                    <MDBIcon icon="pen" className="edit-icon"  />
                  </li>
                </Fragment>
              )
            })}
          </ul>
        </Fragment>
      )
    });
  }

  const deleteButton = () => {
    return (
      <Button
        variant='danger'
        onClick={deleteCourse}
      >
        Delete This Course
      </Button>
    )
  }

  const deleteCourse = (e) => {
    e.preventDefault()
    const formData = {
      courseId: props.match.params.id
    }
    props.deleteCourse(formData)
    props.history.push('/')
  }

  return (
    <div >
      {
        props.assignments.length > 0 ?
          <Fragment>
            {renderAssignments()}
            {deleteButton()}
          </Fragment>
        :
        <Fragment>
          <p>No assignments added yet.</p>
          {deleteButton()}
        </Fragment>
      }
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCourse: (formData) => dispatch(deleteCourse(formData))
  };
}

export default withRouter(connect(null, mapDispatchToProps)(CourseSchedule))
