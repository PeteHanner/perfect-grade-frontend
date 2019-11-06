import React from 'react'
import {withRouter } from 'react-router-dom'

const AdjustedScheduleList = (props) => {

  const renderAsgmts = () => {
    return props.assignments.map(a => {
      return(
        <li>{a.adj_date}: {a.description}</li>
      );
    });
  }

  return(
    props.assignments.length > 0 ?
    <div>
      {renderAsgmts()}
    </div>
    :
    null
  )
}

export default withRouter(AdjustedScheduleList)