import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent, removeStudent } from '../../redux/studentSlice';
import './StudentPage.css';

const StudentPage = () => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const [newStudent, setNewStudent] = useState('');

  const handleAddStudent = () => {
    dispatch(addStudent(newStudent));
    setNewStudent('');
  };

  return (
    <div className="student-page">
      <h2>Students</h2>
      <input
        type="text"
        placeholder="Enter student name"
        value={newStudent}
        onChange={(e) => setNewStudent(e.target.value)}
      />
      <button onClick={handleAddStudent}>Add Student</button>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
            <button onClick={() => dispatch(removeStudent(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentPage;
