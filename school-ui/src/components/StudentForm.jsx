import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const StudentForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newStudent = {
            firstName,
            lastName,
            age: parseInt(age),
            course,
        };

        try {
            const response = await fetch('http://localhost:3000/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newStudent),
            });

            if (response.ok) {
                onSubmit();
                setFirstName('');
                setLastName('');
                setAge('');
                setCourse('');
            } else {
                console.error('Error adding student:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding student:', error);
        }
    };

    const handleFirstNameChange = (e) => {
        const { value } = e.target;
        if (/^[a-zA-Z\s]*$/.test(value)) {
            setFirstName(value);
        }
    };

    const handleLastNameChange = (e) => {
        const { value } = e.target;
        if (/^[a-zA-Z\s]*$/.test(value)) {
            setLastName(value);
        }
    };

    const handleAgeChange = (e) => {
        const { value } = e.target;
        if (/^\d*$/.test(value)) {
            setAge(value);
        }
    };

    const handleCourseChange = (e) => {
        setCourse(e.target.value);
    };

    return (
        <Container className="mt-4">
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit} className="form">
                        <Form.Group controlId="firstName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="lastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                value={lastName}
                                onChange={handleLastNameChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="age">
                            <Form.Label>Edad</Form.Label>
                            <Form.Control
                                type="text"
                                value={age}
                                onChange={handleAgeChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="course">
                            <Form.Label>Curso</Form.Label>
                            <Form.Control as="select" value={course} onChange={handleCourseChange} required>
                                <option value="Primero">Primero</option>
                                <option value="Segundo">Segundo</option>
                                <option value="Cuarto">Tercero</option>
                                <option value="Quinto">Tercero</option>
                                <option value="Sexto">Tercero</option>
                                {}
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="btn btn-success">
                            Agregar Estudiante
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default StudentForm;
