import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFaculty, removeFaculty } from '../../redux/facultySlice';
import './FacultyPage.css';

const FacultyPage = () => {
  const faculty = useSelector((state) => state.faculty);
  const dispatch = useDispatch();

  const [newFaculty, setNewFaculty] = useState('');

  const handleAddFaculty = () => {
    dispatch(addFaculty(newFaculty));
    setNewFaculty('');
  };

  return (
    <div className="faculty-page">
      <h2>Faculty</h2>
      <input
        type="text"
        placeholder="Enter faculty name"
        value={newFaculty}
        onChange={(e) => setNewFaculty(e.target.value)}
      />
      <button onClick={handleAddFaculty}>Add Faculty</button>
      <ul>
        {faculty.map((member, index) => (
          <li key={index}>
            {member}
            <button onClick={() => dispatch(removeFaculty(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacultyPage;
