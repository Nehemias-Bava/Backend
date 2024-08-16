import React from 'react';
import { Link } from 'react-router-dom';

const CoursesList = ({ students }) => {
    return (
        <div>
            <h1>Lista de Cursos</h1>
            {students.map(student => (
                <div key={student.id}>
                    <Link to={`/estudiante/${student.id}`}>{`${student.apellido}, ${student.nombre}`}</Link>
                    {/* Mostrar otros detalles del estudiante */}
                </div>
            ))}
        </div>
    );
};

export default CoursesList;