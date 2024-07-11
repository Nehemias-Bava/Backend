import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CoursesPage from './components/CoursesPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/cursos" element={<CoursesPage />} />
                        <Route path="/" element={
                            <div>
                                <p>
                                    ¡Bienvenidos a nuestra escuela privada! En nuestra institución, nos dedicamos a proporcionar una educación de excelencia en un entorno acogedor y seguro. Ubicados en un campus moderno y equipado, ofrecemos instalaciones de vanguardia que incluyen laboratorios científicos, biblioteca completa, y espacios deportivos para fomentar el desarrollo integral de nuestros estudiantes. Nuestro compromiso con la educación de calidad se refleja en nuestro equipo docente altamente cualificado y en programas académicos innovadores que preparan a los estudiantes para enfrentar los desafíos del futuro. ¡Únete a nuestra comunidad educativa y descubre las oportunidades que tenemos para tu hijo!
                                </p>
                            </div>
                        } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;