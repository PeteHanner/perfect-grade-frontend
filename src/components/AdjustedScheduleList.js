/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

// Parent: SchedulePage
const AdjustedScheduleList = (props) => {
  const renderAsgmts = () => props.assignments.map((entry) => {
    // Store adjusted day & array of asgmts for that day in vars
    const day = entry[0];
    const asgs = entry[1];

    // Create date-grouped list of asgmts
    return (
      <Fragment key={day}>
        <h5>{moment(day).format('dddd MMM. D, YYYY')}</h5>
        <ul>
          {
            asgs
              ? asgs.map((a) => (
                <li key={a.description}>
                  {a.description}
                  {' '}
                  <br />
                  {' '}
                  <span className="course-title">
                    (
                    {a.course.name}
                    )
                  </span>
                </li>
              ))
              : null
          }
        </ul>
      </Fragment>
    );
  });

  return (
    <div id="adj-schedule-list">
      {renderAsgmts()}
    </div>
  );
};

export default withRouter(AdjustedScheduleList);
