import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCourse, removeCourse } from '../../redux/courseSlice';
import './CoursePage.css';

const CoursePage = () => {
  const courses = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  const [newCourse, setNewCourse] = useState('');

  const handleAddCourse = () => {
    dispatch(addCourse(newCourse));
    setNewCourse('');
  };

  return (
    <div className="course-page">
      <h2>Courses</h2>
      <input
        type="text"
        placeholder="Enter course name"
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
      />
      <button onClick={handleAddCourse}>Add Course</button>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course}
            <button onClick={() => dispatch(removeCourse(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePage;
