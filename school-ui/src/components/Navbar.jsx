import React, { useState } from 'react';
import styled from 'styled-components';
import BurgerButton from './BurgerButton';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavContainer>
                <h1>Escuela Privada Nemel: <span className='primary-text'>Gestión Escolar</span></h1>
                <NavLinks isOpen={isOpen}>
                    <Link to="/">Inicio</Link>
                    <Link to="/cursos">Cursos</Link>
                    <a href="#asignaturas">Asignaturas</a>
                    {/* <Link to="/instalations">Instalaciones</Link> */}
                    <a href="#contactos">Contactos</a>
                </NavLinks>
                <BurgerButton isOpen={isOpen} handleToggle={handleToggle} />
            </NavContainer>
        </>
    );
};

export default Navbar;

const NavContainer = styled.nav`
    width: 100%;
    padding: 0.6rem;
    background-color: #000000e6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 10;

    h1 {
        padding-left: 10px;
        font-weight: 400;
        color: white;
        margin: 0;
    }

    .primary-text {
        font-weight: bold;
        background: linear-gradient(180deg, #2B422A, #6F9059);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 1.5rem;
    padding-right: 15px;

    a {
        color: white;
        text-decoration: none;
        transition: color 0.3s;
        &:hover {
            color: #dc8343;
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        position: absolute;
        top: 79px;  
        left: 0;
        width: 100%;
        background-color: #000000e6;
        padding: 1rem;
        border-radius: 0 0 80% 0;
    }


    @media (min-width: 600px) and (max-width: 768px) {
        flex-direction: column;
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        position: absolute;
        top: 49px;  
        left: 0;
        width: 100%;
        background-color: #000000e6;
        padding: 1rem;
        border-radius: 0 0 80% 0;
    }

`;
