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
                asgs.map(a => <li key={a.description}>{a.description} <br/> ({a.course.name})</li>)
              :
                null
            }
          </ul>
        </Fragment>
      )
    })
  }

  return (
    <div>
      {renderAsgmts()}
    </div>
  )
}

export default withRouter(AdjustedScheduleList)
