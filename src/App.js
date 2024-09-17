
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import StudentPage from './components/pages/StudentPage';
import FacultyPage from './components/pages/FacultyPage';
import CoursePage from './components/pages/CoursePage';

function App() {
  return (
    <>
     {/* <Router> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<StudentPage />} />
        <Route path="/faculty" element={<FacultyPage />} />
        <Route path="/courses" element={<CoursePage />} />
      </Routes>
    {/* // </Router> */}
    </>
  );
}

export default App;
