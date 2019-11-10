import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { deleteCourse } from '../actions/deleteCourse'
import { MDBIcon } from "mdbreact";
import EditAssignmentForm from './EditAssignmentForm'
import moment from 'moment'


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

    const [state, setState] = React.useState({
      id: '',
      desc: '',
      dueDate: '',
      showEditForm: false
    })

    const editAssignment = (id, desc, date) => {
      let calDate = new Date(date)
      calDate.setDate(calDate.getDate() + 1);
      setState({
        id: id,
        desc: desc,
        dueDate: calDate,
        showEditForm: true
      })
    }

    const renderAssignments = () => {
      const uuidv1 = require('uuid/v1');

      return props.assignments.map(arr => {
        const date = arr[0]
        const asgmt_arr = arr[1]
        return (
          <Fragment key={uuidv1()}>
            <h4>{moment(date).format('dddd MMM. D, YYYY')}</h4>
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
                show={state.showEditForm}
                id={state.id}
                description={state.desc}
                dueDate={state.dueDate}
                onHide={()=> setState({
                  id: '',
                  desc: '',
                  dueDate: new Date(),
                  showEditForm: false
                })}
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
