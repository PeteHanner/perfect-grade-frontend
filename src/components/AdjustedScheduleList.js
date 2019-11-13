import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

const AdjustedScheduleList = (props) => {

  const renderAsgmts = () => {
    return props.assignments.map(entry => {
      const day = entry[0]
      const asgs = entry[1]
      return (
        <Fragment key={day}>
          <h5>{moment(day).format('dddd MMM. D, YYYY')}</h5>
          <ul>
            {
              asgs ?
                asgs.map(a => <li key={a.description}>{a.description} <br/> <span className='course-title'>({a.course.name})</span></li>)
              :
                null
            }
          </ul>
        </Fragment>
      )
    })
  }

  return (
    <div id='adj-schedule-list'>
      {renderAsgmts()}
    </div>
  )
}

export default withRouter(AdjustedScheduleList)
