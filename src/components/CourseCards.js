import React from 'react'
import { withRouter } from 'react-router-dom';
import { CardGroup, Card } from 'react-bootstrap'
import NewCourseForm from './NewCourseForm'


const CourseCards = (props) => {

  const randColor = () => {
    return '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
  }

  const goToCoursePage = (e) => {
    e.preventDefault()
    props.history.push(`/courses/${e.target.dataset.id}`)
  }

  const renderCourseCards = () => {
    return props.courses.map(course => {
      return (
        <span
          className='card'
          key={course.id}
          data-id={course.id}
          style={{backgroundColor:randColor()}}
          onClick={goToCoursePage}
        >
          <h2
            className='card-title'
            data-id={course.id}
          >
            {course.name}
          </h2>
        </span>
      );
    })
  }

  const [newCourseShow, setNewCourseShow] = React.useState(false);

  return (
    <div id='course-cards'>
      {renderCourseCards()}
    </div>
  )
}

export default withRouter(CourseCards)

{/* <Card
  key={course.id}
  data-id={course.id}
  style={{
    maxWidth: '15rem',
    minHeight: '10rem',
    backgroundColor:randColor()
  }}
  onClick={goToCoursePage}
>
  <Card.Title data-id={course.id}>{course.name}</Card.Title>
</Card> */}