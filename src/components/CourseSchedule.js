import React from 'react'

const CourseSchedule = (props) => {

  const renderAssignments = () => {
    return props.assignments.map(a => {
      return (
        <li>{a.og_date}:  {a.description}</li>
      );
    })
  }

  return(
    <div>
      {
        props.assignments.length > 0 ?
        <ul>
          {renderAssignments()}
        </ul>
        :
        <p>Loading, please wait</p>
      }

    </div>
  )
}

export default CourseSchedule