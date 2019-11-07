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
        <Card
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
        </Card>
      );
    })
  }

  const [newCourseShow, setNewCourseShow] = React.useState(false);

  return (
    <CardGroup id='course-cards'>
      {renderCourseCards()}
      <Card
        bg='light'
        style={{ maxWidth: '15rem' }}
        onClick={(e) => setNewCourseShow(true)
        }
      >
        <Card.Title>Add A New Course</Card.Title>
      </Card>
      <NewCourseForm
        show={newCourseShow}
        onHide={()=> setNewCourseShow(false)}
      />
    </CardGroup>
  )
}

export default withRouter(CourseCards)
