import React, {Fragment} from 'react'
import {withRouter } from 'react-router-dom'

const AdjustedScheduleList = (props) => {

  const renderAsgmts = () => {
    const entries = Object.entries(props.assignments)

    return entries.map(day => {
      return(
        <>
          <h5>{day[0]}</h5>
          <ul>
            {day[1].map(a => <li key={a.description}>{a.description}</li>)}
          </ul>
        </>
      )
    })
  }

  return(
    props.assignments !== [] ?
    <div>
      {renderAsgmts()}
    </div>
    :
    null
  )
}

export default withRouter(AdjustedScheduleList)