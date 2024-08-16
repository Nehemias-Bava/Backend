import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentsList from './components/StudentList';
import CourseDetails from './components/CourseDetails';
import AddStudentForm from './components/AddStudentForm';
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import StudentProfile from './pages/StudentProfile';
// import Instalations from './pages/Instalations';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cursos" element={<CoursesPage />} />
                    <Route path="/cursos/:id" element={<CourseDetails />} />
                    <Route path="/cursos/:id/agregar-estudiante" element={<AddStudentForm />} />
                    <Route path="/estudiantes/:id" element={<StudentProfile />} />
                    <Route path="/lista-estudiantes" element={<StudentsList />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
