/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { MDBIcon } from 'mdbreact';
import moment from 'moment';
import EditAssignmentForm from './EditAssignmentForm';

// Parent: CoursePage
const CourseSchedule = (props) => {
  // State elements to track for a given assignment
  const defaultState = {
    id: '',
    desc: '',
    dueDate: '',
    showEditForm: false,
  };

  // State in functional component
  const [state, setState] = React.useState(defaultState);

  // Fires when assignment is edited, overwriting state
  const editAssignment = (id, desc, date) => {
    const calDate = new Date(date);
    calDate.setDate(calDate.getDate() + 1);
    setState({
      id,
      desc,
      dueDate: calDate,
      showEditForm: true,
    });
  };

  const renderAssignments = () => {
    const uuidv1 = require('uuid/v1');

    // Loop over days & asgmts, respectively, displaying them with edit icons
    return props.assignments.map((arr) => {
      const date = arr[0];
      const asgmtArr = arr[1];
      return (
        <div key={uuidv1()} id="course-schedule">
          <h4>{moment(date).format('dddd, MMMM D, YYYY')}</h4>
          <ul>
            {asgmtArr.sort((a, b) => ((a.id > b.id) ? 1 : -1)).map((a) => (
              <li key={uuidv1()}>
                {a.description}
                <MDBIcon
                  icon="pen"
                  className="edit-icon"
                  onClick={() => editAssignment(a.id, a.description, date)}
                />
              </li>
            ))}
          </ul>
        </div>
      );
    });
  };

  /* Edit form defaults to hidden, asgmts rendered w helper function if they
  exist */
  return (
    <div id="course-schedule-bg">
      {
        props.assignments.length > 0
          ? (
            <>
              <EditAssignmentForm
                show={state.showEditForm}
                id={state.id}
                description={state.desc}
                dueDate={state.dueDate}
                onHide={() => setState(defaultState)}
              />
              {renderAssignments()}
            </>
          )
          : (
            <>
              <p>No assignments added yet.</p>
            </>
          )
      }
    </div>
  );
};

export default withRouter(CourseSchedule);
