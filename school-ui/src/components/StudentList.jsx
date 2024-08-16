import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const curso = searchParams.get('curso');

    useEffect(() => {
        const fetchStudents = async () => {
        try {
            // Simulación de carga de datos desde un archivo JSON
            const response = await fetch('/Backend/gestor-escolar/data/students.json'); // Reemplazar con la ruta correcta
            if (!response.ok) {
            throw new Error('Error al cargar los estudiantes');
            }
            const data = await response.json();

            // Filtrar estudiantes según el curso seleccionado
            if (curso) {
            const filteredStudents = data.filter(student => student.curso.toLowerCase() === curso.toLowerCase());
            setStudents(filteredStudents);
            } else {
            setStudents(data);
            }
        } catch (error) {
            console.error('Error al cargar los estudiantes:', error.message);
        }
        };

        fetchStudents();
    }, [curso]);

    return (
        <StudentsContainer>
        {students.map(student => (
            <StudentLink key={student.id} to={`/estudiantes/${student.id}`}>
            {student.nombre} {student.apellido}
            </StudentLink>
        ))}
        </StudentsContainer>
    );
};

export default StudentsList;

const StudentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    `;

    const StudentLink = styled(Link)`
    padding: 10px;
    background: #6F9059;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    text-align: center;
    transition: background 0.3s;

    &:hover {
        background: #5f7d4a;
    }
`;