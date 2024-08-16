import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const courses = ["Primero", "Segundo", "Tercero", "Cuarto", "Quinto", "Sexto"];

const CoursesPage = () => {
    return (
        <CoursesContainer>
            {courses.map((course, index) => (
                <CourseLink key={index} to={`/cursos/${course.toLowerCase()}`}>
                    {course}
                </CourseLink>
            ))}
        </CoursesContainer>
    );
};

export default CoursesPage;

const CoursesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    justify-content: center;
    padding-top: 30%; 
`;

const CourseLink = styled(Link)`
    padding: 20px;
    background: black;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    text-align: center;
    width: 150px;
    transition: background 0.3s;
    opacity: 0.7;

    &:hover {
        background: #2B422A;
        opacity: 1;
    }
`;
