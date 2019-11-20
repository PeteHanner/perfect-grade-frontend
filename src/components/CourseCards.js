/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { withRouter } from 'react-router-dom';
import NewCourseForm from './NewCourseForm';

const CourseCards = (props) => {
  const colorArray = [
    'a20705',
    '610A95',
    'B69500',
    '156D20',
    '005C76',
    'c26702',
  ];

  const goToCoursePage = (e) => {
    e.preventDefault();
    props.history.push(`/courses/${e.target.dataset.id}`);
  };

  const renderCourseCards = () => props.courses.map((course, index) => {
    const bgColor = `#${colorArray[index % 6]}`;
    return (
      <div
        className="course-card"
        key={course.id}
        data-id={course.id}
        style={{ backgroundColor: bgColor }}
        onClick={goToCoursePage}
      >
        <h2 className="card-title" data-id={course.id}>
          {course.name}
        </h2>
      </div>
    );
  });

  const [newCourseShow, setNewCourseShow] = React.useState(false);

  return (
    <div id="course-cards">
      {renderCourseCards()}
      <div
        className="course-card"
        style={{ backgroundColor: 'lightgray' }}
        onClick={() => setNewCourseShow(true)}
      >
        <h2 className="card-title new-course">Add a New Course</h2>
      </div>
      <NewCourseForm
        show={newCourseShow}
        onHide={() => setNewCourseShow(false)}
      />
    </div>
  );
};

export default withRouter(CourseCards);
