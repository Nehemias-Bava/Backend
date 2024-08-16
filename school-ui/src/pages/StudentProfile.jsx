import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StudentProfile = () => {
    const { id } = useParams();
    const [student, setStudent] = useState(null);

    useEffect(() => {
        
        const fetchStudent = async () => {
            try {
                const response = await fetch(`/api/students/${id}`); 
                if (!response.ok) {
                    throw new Error('No se pudo cargar el estudiante');
                }
                const data = await response.json();
                setStudent(data);
            } catch (error) {
                console.error('Error al obtener el estudiante:', error.message);
            }
        };

        fetchStudent();
    }, [id]);

    if (!student) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            <h2>{`${student.apellido}, ${student.nombre}`}</h2>
            <p>Edad: {student.edad}</p>
            <p>DNI: {student.dni}</p>
            <p>Curso: {student.curso}</p>
            <p>Celular del Responsable: {student.celularResponsable}</p>
        </div>
    );
};

export default StudentProfile;