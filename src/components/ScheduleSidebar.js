import React from 'react'
import Button from 'react-bootstrap/Button'
import { withRouter } from "react-router-dom";
import { ExportToCsv } from 'export-to-csv';


const ScheduleSideBar = (props) => {

  const goHome = (e) => {
    e.preventDefault()
    props.history.push(`/`)
  }

  const csvExport = (e) => {
    const data = []
    props.assignments.forEach(date => {
      const asgmts = date[1]
      asgmts.forEach(a => {
        const fields = {
          task: a.description,
          list: a.course.name,
          duedate: a.adj_date
        }
        data.push(fields)
      })
    })
    console.log(data)

    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'My Awesome CSV',
      useTextFile: false,
      useBom: true,
      headers: ['TASK', 'LIST', 'DUEDATE']
    };
  }

  return (
    <div className='sidenav'>
      <h4
        id='export-button'
        onClick={csvExport}
      >
        Export To App
      </h4>
      <Button
        variant='outline-primary'
        size='sm'
        onClick={goHome}
      >
        {`<<  Home`}
      </Button>
    </div>
  )
}

export default withRouter(ScheduleSideBar)
