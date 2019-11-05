import React, { Component, Fragment } from 'react'
import { CardGroup, Card } from 'react-bootstrap'


const CourseCards = (props) => {

  const renderCourseCards = () => {
    props.courses.map(course => {
      return {

      };
    })
  }

  return (
    <CardGroup id='course-cards'>
      {/*renderCourseCards()*/}
      <Card border='dark'>
        <Card.Img variant='top' src='https://www.fillmurray.com/200/200' />
        <Card.Body>
        <Card.Title>Add A New Course</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default CourseCards
