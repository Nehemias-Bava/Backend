import React from 'react';
import styled from 'styled-components';


const Home = () => {
    return (
        <HomeContainer>
            <WaveBackground>
                <WelcomeText>
                    ¡Bienvenidos a nuestra escuela privada! En nuestra institución, nos dedicamos a proporcionar una educación de excelencia en un entorno acogedor y seguro. Ubicados en un campus moderno y equipado, ofrecemos instalaciones de vanguardia que incluyen laboratorios científicos, biblioteca completa, y espacios deportivos para fomentar el desarrollo integral de nuestros estudiantes. Nuestro compromiso con la educación de calidad se refleja en nuestro equipo docente altamente cualificado y en programas académicos innovadores que preparan a los estudiantes para enfrentar los desafíos del futuro. ¡Únete a nuestra comunidad educativa y descubre las oportunidades que tenemos!
                </WelcomeText>
            </WaveBackground>
        </HomeContainer>
    );
};

export default Home;

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding-top: 150px; 
`;

const WaveBackground = styled.div`
    position: relative;
    width: 80%;
    max-width: 800px;
    background: black;
    border-radius: 10px;
    padding: 20px;
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 1;
    }
`;

const WelcomeText = styled.div`
    position: relative;
    z-index: 1;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    transition: opacity 0.3s ease-in-out;
    opacity: 0.6;

    ${WaveBackground}:hover & {
        opacity: 1;
    }
`;

