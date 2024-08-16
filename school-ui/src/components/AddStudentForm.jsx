import React, { useState } from 'react';
import styled from 'styled-components';

const AddStudentForm = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [edad, setEdad] = useState('');
    const [dni, setDni] = useState('');
    const [curso, setCurso] = useState('');
    const [celularResponsable, setCelularResponsable] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const student = {
            nombre,
            apellido,
            edad: parseInt(edad, 10),
            dni: parseInt(dni, 10),
            curso,
            celularResponsable: parseInt(celularResponsable, 10)
        };

        try {
            const response = await fetch('http://localhost:3000/api/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(student),
            });

            if (response.ok) {
                alert('Estudiante agregado exitosamente');
                setNombre('');
                setApellido('');
                setEdad('');
                setDni('');
                setCurso('');
                setCelularResponsable('');
                setError('');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al agregar el estudiante');
            }
        } catch (error) {
            setError('Error de red: ' + error.message);
        }
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" required />
                <input type="number" value={edad} onChange={(e) => setEdad(e.target.value)} placeholder="Edad" required />
                <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} placeholder="DNI" required />
                <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)} placeholder="Curso" required />
                <input type="text" value={celularResponsable} onChange={(e) => setCelularResponsable(e.target.value)} placeholder="Celular del Responsable" required />
                <button type="submit">Agregar</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </FormContainer>
    );
};

export default AddStudentForm;

const FormContainer = styled.div`
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 15% auto;

    form {
        display: flex;
        flex-direction: column;

        input {
            padding: 5px;
            margin-bottom: 10px;
            border-radius: 4px;
            border: none;
        }

        button {
            padding: 10px;
            background: #6F9059;
            border: none;
            border-radius: 4px;
            color: white;
            cursor: pointer;
            transition: background 0.3s;

            &:hover {
                background: #5f7d4a;
            }
        }
    }
`;