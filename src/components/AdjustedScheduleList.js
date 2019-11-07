import React, {Fragment} from 'react'
import {withRouter } from 'react-router-dom'

const AdjustedScheduleList = (props) => {

  const renderAsgmts = () => {
    return props.assignments.map(entry => {
      const day = entry[0]
      const asgs = entry[1]
      return(
        <Fragment>
          <h5>{day}</h5>
          <ul>
            {asgs.map(a => <li>{a.description} <br/> ({a.course.name})</li>)}
          </ul>
        </Fragment>
      )
    })
  }

  return(
    props.assignments !== [] ?
    <div>
      {renderAsgmts()}
    </div>
    :
    <p>Loading ....</p>
  )
}

export default withRouter(AdjustedScheduleList)