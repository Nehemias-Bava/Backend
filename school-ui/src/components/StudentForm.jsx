import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const StudentForm = ({ onSubmit, editingStudent, setEditingStudent }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [grade, setGrade] = useState('');

    useEffect(() => {
        if (editingStudent) {
        setFirstName(editingStudent.firstName);
        setLastName(editingStudent.lastName);
        setAge(editingStudent.age.toString());
        setGrade(editingStudent.grade);
        }
    }, [editingStudent]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newStudent = {
        firstName,
        lastName,
        age: parseInt(age),
        grade,
        };

        try {
        const response = await fetch(
            `http://localhost:3000/students${editingStudent ? `/${editingStudent.id}` : ''}`,
            {
            method: editingStudent ? 'PUT' : 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
            }
        );

        if (response.ok) {
            onSubmit();
            setFirstName('');
            setLastName('');
            setAge('');
            setGrade('');
            setEditingStudent(null);
        } else {
            console.error('Error updating student:', response.statusText);
        }
        } catch (error) {
        console.error('Error updating student:', error);
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

    const handleGradeChange = (e) => {
        const { value } = e.target;
        if (/^[a-zA-Z\s]*$/.test(value)) {
        setGrade(value);
        }
    };

    return (
        <Container className="mt-4">
        <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
            <Form onSubmit={handleSubmit}>
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

                <Form.Group controlId="grade">
                <Form.Label>Grado</Form.Label>
                <Form.Control
                    type="text"
                    value={grade}
                    onChange={handleGradeChange}
                    required
                />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                {editingStudent ? 'Actualizar Estudiante' : 'Agregar Estudiante'}
                </Button>
            </Form>
            </Col>
        </Row>
        </Container>
    );
};

export default StudentForm;
