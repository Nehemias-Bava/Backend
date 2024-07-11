import React from 'react';
import styled from 'styled-components';

function BurgerButton({ isOpen, handleToggle }) {
    return (
        <Burger onClick={handleToggle}>
            <div className={`hamburger ${isOpen ? 'is-active' : ''}`} id="hamburger-6">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </Burger>
    );
}

export default BurgerButton;

const Burger = styled.div`
    cursor: pointer;

    .hamburger {
        width: 30px;
        height: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    
    .line {
        width: 100%;
        height: 3px;
        background-color: white;
        transition: all 0.3s ease-in-out;
    }

    .is-active .line:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
    }

    .is-active .line:nth-child(2) {
        opacity: 0;
    }

    .is-active .line:nth-child(3) {
        transform: translateY(-12px) rotate(-45deg);
    }

    @media (min-width: 768px) {
        display: none;
    }
`;