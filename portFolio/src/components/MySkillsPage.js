import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Design, Develope } from "./AllSvgs";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "../subComponents/ParticleComponent";

import BigTitle from "../subComponents/BigTitle";

import { useTheme } from "styled-components";


const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  transition: background-color 0.5s;

  width: 1300px;
  height: 636px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

`

const Main = styled.div`
border: 2px solid ${(props) => props.theme.text};
color: ${(props) => props.theme.text};
background-color: ${(props) => props.theme.alternativo};
transition: background-color 0.5s, color 0.5s;
padding: 2rem;
width: 350px;
height: 370px;
z-index: 3;
line-height: 1.5;
font-family: 'Ubuntu Mono', monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
  background-color: ${(props) => props.theme.fondoSkills};
  transition: background-color 0.6s;
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

fill: ${(props) => props.theme.text};

${Main}:hover &{
  &>*{
    fill: white;};
    color: white;
  }


&>*:first-child{
  margin-right: 1rem;
}


`
const Description = styled.div`
color: ${(props) => props.theme.text};

font-size: calc(0.4rem + 1vw);
padding: 0.5rem 0;

${Main}:hover & {color: white};
  


strong {
  margin-right: 1rem;
  text-transform: uppercase;
}
ul,p{
  margin-left: 2rem; 
}
`
const Container = styled.div`
width: 80%;
top: 9%;
position: relative;
height: 73%;
display: flex;
flex-wrap: wrap;
gap: 2rem 3rem;
justify-content: center;

overflow: auto;
  
 
  &::-webkit-scrollbar {
    width: 10px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.text}; 
    transition: background-color 0.5s;
    border-radius: 6px;
  }
`;


const MySkillsPage = ({ clickMode }) => {


  const theme = useTheme();
  theme.clickMode = clickMode;



  return (


    <ThemeProvider theme={theme}>

      <Box>

        <SocialIcons />
        <ParticleComponent clickMode={clickMode} />
        <Container>
          <Main>
            <Title>
              <Develope width={40} height={40} /> BackEnd Developer
            </Title>

            <Description>
              Disfruto construyendo, optimizando y probando la lógica detrás de las aplicaciones.
            </Description>
            <Description>
              <strong>SKILLS</strong>
              <p>
                Javascript, NPM, NodeJs, ExpressJs, APIs, JWT, WebScraping, Testing, MVC, POO, Regex, Documentación, MongoDB, MySQL.
              </p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>
                Vscode, ESLint, Jest, Postman.
              </p>
            </Description>
          </Main>
          <Main>
            <Title>
              <Design width={40} height={40} /> FrontEnd Developer
            </Title>

            <Description>
              Me encanta dar vida a la creatividad y diseñar interfaces visuales animadas e impactantes.        </Description>
            <Description>
              <strong>Skills</strong>
              <p>
                Html, Css, Sass, Javascript, React, Hooks, React-Router, Redux, Styled components, Emotion, Framer-motion, Material-UI, Three.js.
              </p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>
                Vscode, ESLint, React DevTools.
              </p>
            </Description>
          </Main>
          <Main>
            <Title>
              <Develope width={40} height={40} /> DevOps
            </Title>

            <Description>
              Para la integración continua, entregas, despliegues, monitoreo.           </Description>
            <Description>
              <strong>Skills</strong>
              <p>
                Servidores VPS, Servidores Compartidos, Cpanel, Plesk, Dominios, Nginx, SSL.
              </p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>
                Git, Github, Docker
              </p>
            </Description>
          </Main>
          <Main>
            <Title>
              <Develope width={40} height={40} /> Wordpress
            </Title>

            <Description>
              Diseño, gestión y desarrollo en entornos WordPress.            </Description>
            <Description>
              <strong>Skills</strong>
              <p>
                Gestión de Plugins y Temas, Seguridad, Tiendas, Integraciones, Pasarelas de pago, Resolucion de problemas.
              </p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>
                Woocommerce, Elementor, Visual Composer, Slider Revolution.
              </p>
            </Description>
          </Main>
          <Main>
            <Title>
              <Develope width={40} height={40} />SEO/SEM
            </Title>

            <Description>
              Publicidad y Posicionamiento en buscadores.
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>
                SEO OnPage, SEO OffPage, Analyticas, Publicidad.
              </p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>
                Google Analytics, Google Search Console, Google Ads, Google AdSense, Yoast SEO, Screaming Frog, SEMrush, GTmetrix, PageSpeed, Ahrefs, Ubersuggest.
              </p>
            </Description>
          </Main>
          <Main>
            <Title>
              <Develope width={40} height={40} /> Herramientas
            </Title>

            <Description>
              Destreza en el uso de herramientas que faciliten el trabajo.
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>
                Audiovisual, Metodologías ágiles.
              </p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>
                Photoshop, Illustrator, Premiere. Ableton Live, Figma, Trello, Scrum, Agile.
              </p>
            </Description>
          </Main>
        </Container>
        <BigTitle text="SKILLS" top="5%" rigth="30%" />


      </Box>

    </ThemeProvider>


  );
}

export default MySkillsPage; 