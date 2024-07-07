import React, { useState, useEffect } from 'react';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents(); // Llamar a la función fetchStudents al montar el componente
    }, []);

    // Función para obtener todos los estudiantes desde la API
    const fetchStudents = async () => {
        try {
        const response = await fetch('http://localhost:3000/students'); // Realizar solicitud GET a la API
        const data = await response.json(); // Convertir la respuesta a JSON
        setStudents(data); // Actualizar el estado con los estudiantes obtenidos
        } catch (error) {
        console.error('Error fetching students:', error); // Manejar errores
        }
    };

    // Función para manejar la eliminación de un estudiante
    const handleDelete = async (id) => {
        try {
        await fetch(`http://localhost:3000/students/${id}`, {
            method: 'DELETE' // Realizar solicitud DELETE a la API para eliminar el estudiante
        });
        fetchStudents(); // Actualizar la lista de estudiantes después de la eliminación
        } catch (error) {
        console.error('Error deleting student:', error); // Manejar errores
        }
    };

    return (
        <div>
        <h2>Lista de Estudiantes</h2>
        <ul>
            {students.map((student) => (
            <li key={student.id}>
                {student.firstName} {student.lastName} - Grado: {student.grade}
                <button onClick={() => handleDelete(student.id)}>Eliminar</button>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default StudentList;