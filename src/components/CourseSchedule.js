import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { deleteCourse } from '../actions/deleteCourse'
import { MDBIcon } from "mdbreact";
import EditAssignmentForm from './EditAssignmentForm'

const CourseSchedule = (props) => {

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

  const [showEditForm, setShowEditForm] = React.useState(false);
  const [asgmtId, setAsgmtId] = React.useState('');
  const [asgmtDesc, setAsgmtDesc] = React.useState('');
  const [dueDate, setDueDate] = React.useState('');

  const editAssignment = (id, desc, date) => {
    setAsgmtId(id);
    setAsgmtDesc(desc);
    setDueDate(date);
    console.log(asgmtId, asgmtDesc, dueDate)
  }

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
                    <MDBIcon
                      icon="pen"
                      className="edit-icon"
                      onClick={() => editAssignment(a.id, a.description, date)}
                    />
                  </li>
                </Fragment>
              )
            })}
          </ul>
        </Fragment>
      )
    });
  }


  return (
    <div >
      {
        props.assignments.length > 0 ?
          <Fragment>
            <EditAssignmentForm
              show={showEditForm}
              id={asgmtId}
              description={asgmtDesc}
              dueDate={dueDate}
              onHide={()=> setShowEditForm(false)}
            />
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
