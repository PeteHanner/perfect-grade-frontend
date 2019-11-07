import React, { Fragment } from 'react'

const CourseSchedule = (props) => {

  const renderAssignments = () => {
    // debugger
    return props.assignments.map(arr => {
      const date = arr[0]
      const asgmt_arr = arr[1]
      return(
        <Fragment key={date}>
          <h4>{date}</h4>
          <ul>
            {asgmt_arr.map(a => <li key={a.description}>{a.description}</li>)}
          </ul>
        </Fragment>
      )
    });
  }

  return (
    <div >
      {
        props.assignments.length > 0 ?
          renderAssignments()
        :
        <p>No assignments added yet.</p>
      }
    </div>
  )
}

export default CourseSchedule
