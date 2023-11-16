import React from "react";
import styled, { ThemeProvider } from 'styled-components'
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";

import { useTheme } from "styled-components";

import BigTitle from "../subComponents/BigTitle";


const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  transition: background-color 0.5s;

  width: 100%;
  height: 100vh; 
  position: relative;
 overflow: hidden;

`

const Main = styled.div`    
border: 2px solid ${(props) => props.theme.text};
transition: border 0.5s;

color: ${(props) => props.theme.text};
transition: color 0.5s, color 0.5s;

padding: 2rem;
width: 800px;
height: 400px;
z-index: 3;
line-height: 1.5;

display: flex;
justify-content: center;
align-items: center;

font-size: calc(0.2rem + 1vw);
backdrop-filter: blur(4px);

position: absolute;
left: 220px;
top: 8rem;

font-family: 'Ubuntu Mono', monospace;
font-size: 1rem;
`


const AboutPage = ({ clickMode }) => {

  const theme = useTheme();


  return (
    <ThemeProvider theme={theme}>

      <Box>
        <SocialIcons />
        <ParticleComponent clickMode={clickMode} />
        <Main>
          Con más de una década de experiencia en la industria, soy un apasionado programador y líder de proyectos informáticos. A lo largo de mi carrera, he demostrado con éxito mi capacidad para liderar y ejecutar más de 20 proyectos de marketing digital y programación en una amplia variedad de tecnologías y herramientas. Estos proyectos han abarcado desde el desarrollo de sistemas para centros médicos hasta la creación de plataformas para periódicos digitales y tiendas en línea, en una gama diversa de sectores.
          <br /> <br />
          Mi experiencia en la gestión de proyectos, combinada con mi profundo interés en la tecnología, me coloca en una posición única para llevar a cabo proyectos desafiantes y de alto impacto en el mundo digital. Estoy emocionado por la perspectiva de aplicar mis habilidades tanto en la dirección estratégica de proyectos como en el desarrollo de soluciones tecnológicas completas.
          <br /> <br />
          Estoy abierto a nuevas colaboraciones y entusiasmado por contribuir al éxito de proyectos innovadores. Si estás en busca de alguien con un historial probado en el ámbito digital y una mentalidad de aprendizaje continuo, estaré encantado de conectarme contigo y explorar las oportunidades de colaboración.
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />

      </Box>

    </ThemeProvider>


  );
}

export default AboutPage; 