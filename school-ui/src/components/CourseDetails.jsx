import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const CourseDetails = () => {
    const { id } = useParams();

    return (
        <CourseDetailsContainer>
            <h2>Curso: {id.charAt(0).toUpperCase() + id.slice(1)}</h2>
            <ButtonsContainer>
                <ButtonLink to={`/cursos/${id}/agregar-estudiante`}>Agregar Estudiante</ButtonLink>
                <ButtonLink to={`/lista-estudiantes?curso=${id}`}>Lista de Estudiantes</ButtonLink>
            </ButtonsContainer>
        </CourseDetailsContainer>
    );
};

export default CourseDetails;

const CourseDetailsContainer = styled.div`
    padding: 20px;
    text-align: center;
    padding-top: 10%; 

    h2 {
        background: white;
        border-radius: 10px;
        margin-bottom: 20px;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    justify-content: center;

`;

const ButtonLink = styled(Link)`
    padding: 10px 20px;
    background: black;
    border-radius: 8px;
    color: white;
    text-decoration: none;
    transition: background 0.3s;

    &:hover {
        background: #2B422A;
    }
`;
