
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/students">Students</Link></li>
        <li><Link to="/faculty">Faculty</Link></li>
        <li><Link to="/courses">Courses</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
