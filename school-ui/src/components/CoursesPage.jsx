import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CoursesPage = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch('http://localhost:3000/courses');
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error('Error fetching courses:', error);
                setCourses([]); // Asegurarse de que courses sea un array vacío en caso de error
            }
        };

        fetchCourses();
    }, []);

    return (
        <Container className="mt-4">
            <Row>
                <Col>
                    <h1>Cursos</h1>
                </Col>
            </Row>
            <Row>
                {Array.isArray(courses) && courses.length > 0 ? (
                    courses.map(course => (
                        <Col key={course.id} xs={12} md={6} lg={4} className="mb-4">
                            <Card>
                                <Card.Body>
                                    <Card.Title>{course.name}</Card.Title>
                                    <Card.Text>Descripción: {course.description}</Card.Text>
                                    {/* Agrega más detalles del curso según tus necesidades */}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col>
                        <p>No se encontraron cursos.</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default CoursesPage;