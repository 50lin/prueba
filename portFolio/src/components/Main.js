import React from "react";
import styled from "styled-components";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Intro from "./Intro";
import { motion } from "framer-motion";
import Pacman from "./Pacman";
import Teleprompter from "./Teleprompter";
import { keyframes } from "styled-components";
import RenderBotones from "../subComponents/Stand";



const MainContainer = styled.div`
background: ${props => props.theme.body};
transition: background 0.5s;

min-width: 1300px;
height: 636px;
min-height: 636px;
max-height: 636px;

overflow: hidden;
position: relative;

h2,h3,h4,h5,h6 {
  font-family: "Karla", sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
}
`
const Container = styled.div`
padding: 2rem;
`

const WORK = styled(NavLink)`
color: ${props => props.theme.text};
transition: color 0.5s;

position: absolute;
top: 6.5rem;
right: 48.3%;
text-decoration: none;
z-index: 2;
`

//la puse arriba
const BottomBar = styled.div`
position: absolute;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
  transition: color 0.5s;

color: ${props => props.click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
`

const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
transition: color 0.5s;

text-decoration: none;
z-index: 1;
`

const Center = styled.button`
  position: absolute;
  top: ${props => props.click ? "90%" : "55%"};
  left:  ${props => props.click ? "32%" : "25%"};
  transform: translate(-50%, -50%);
border: none;
outline: none;
background: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

z-index: 20;
`

const DarkDiv = styled.div`
  transition: background-color 0.5s;

  position: absolute;
  top: 0;
  background-color: ${props => props.theme.info};
  left: 0;
  right: 50;
  width: ${props => props.click ? "50%" : "0%"};
  height: ${props => props.click ? "100%" : "0%"};
  z-index: 1; 
  transition: height 0.5s ease, width 1s ease 0.5s;
  `

const slideOutAnimation = keyframes`
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const slideInAnimation = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StandCaja = styled.div`
width: 25%;
  position: absolute;
  top: 23%;
  left: 61.6%;
  img {
    width: 130%;
    height: 450px;
    transition: transform 0.5s ease;
  }

  &.hide {
    animation: ${slideOutAnimation} 1s ease forwards;
  }

  &.show {
    animation: ${slideInAnimation} 1s ease forwards;
  }
`

const Comida = styled.h1`
width: 100%;
position: absolute;
bottom:  73%;
left: 12%;
font-weight: 400;
font-style: italic;
color: ${props => props.theme.text};
transition: color 0.5s;

`

const Cajon = styled.div`
background: ${props => props.background};
transition: background 0.5s;

width: 100%;
height: 10%;
position: absolute;
top: 96.9%;
border: 1px solid grey;
border-radius: 5px;
`

const CajonArriba = styled.div`
background: ${props => props.background};
transition: background 0.5s;
width: 90%;
height: 10%;
position: absolute;
left: 5%;
top: 18%;
border: 1px solid grey;
border-radius: 5px;
z-index: -1;
box-shadow: 0 0 100px ${props => props.boxShadow};

`

const Menu = styled.h1`
color: white;
transition: color 0.5s;

display: flex;
justify-content: center;
margin-top: 8px;
font-size: 1.3rem;
font-weight: 400;


`

const ClickAqui = styled.h1`
position: absolute;
top: 110%;
font-size: 1rem;
color: ${props => props.theme.text};
transition: color 0.5s;
cursor: pointer;
`


const Main = ({ clickMode }) => {

  const [click, setclick] = useState(false)
  const handleClick = () => setclick(!click);

  const [currentText, setCurrentText] = useState(``);


  useEffect(() => {
    setMenu(clickMode ? "Menú sorpresa" : "Menú mixto");
  }, [clickMode]);


  const [menu, setMenu] = useState("Menú mixto");

  useEffect(() => {
    setCurrentText(clickMode ? `
    - - - - =^_^= - - 🐑 - - 🍹 - - 🥓 - - (°.°) - - 🍯 - - 🧠 - - 🌂 - - ><(((('> - - 💃 - - ʕ·ᴥ·ʔ - - 🐤 - -
    ^._.^ - - 🦖 - - =^_^= - - 🍗 - - 🌯 - - 👟 - - <(°.°)> - - 🐣 - - 🤸🏻‍♂️ - - 🌽 - - ><(((('> - - 🍭 - - ʕ·ᴥ·ʔ - - 🥦 - -
    ^._.^ - - 🌶 - - =^_^= - - 🍩 - - 🐛 - - 🍔 - - <(°.°)> - - 🍰 - - 🤸🏻‍♂️ - - 🦑 - - ><(((('> - - 🍕 - - ʕ·ᴥ·ʔ - - 🍸 - -
    ^._.^ - - 🍺 - - 🥩
    `
      :

      `
      - - - - =^_^= - - 🍕 - - 🥾 - - 🍔 - - (°.°) - - 🐣 - - 🤸🏻‍♂️ - - 🍓 - - ><(((('> - - 🤹🏻‍♂️ - - ʕ·ᴥ·ʔ - - 🍼 - -
      ^._.^ - - 🍒 - - =^_^= - - 🌶 - - 🍢 - - 🥠 - - <(°.°)> - - 🥥 - - 🤸🏻‍♂️ - - 🥖 - - ><(((('> - - 🧚 - - ʕ·ᴥ·ʔ - - 🍌 - -
      ^._.^ - - 🍍 - - =^_^= - - 🍅 - - 🧃 - - 🍜 - - <(°.°)> - - 🍫 - - 🥞 - - ☕️ - - ><(((('> - - 🍇 - - ʕ·ᴥ·ʔ - - 🍦 - -
      ^._.^ - - 🦖 - - 🧋
      `
    );
  }, [clickMode]);


  const handleClickText = (newText, menuActual) => {
    setCurrentText(newText);
    setMenu(menuActual);
  };



  return (
    <MainContainer>

      <DarkDiv click={click} />
      <Container>
        <SocialIcons click={click} />
        {<StandCaja className={click ? 'hide' : 'show'}>
          <img alt="" src={clickMode ? "party.png" : "fondeblanco2.png"} style={{ width: '100%', height: '450px' }} />
          <Comida> {clickMode ? "PacMan Food = 8€" : "PacMan Food = 2€"} </Comida>
          {click || <RenderBotones clickMode={clickMode} handleClickText={handleClickText} currentMenu={menu} />}
          <CajonArriba boxShadow={clickMode ? "red" : "none"} />
          <Cajon background={clickMode ? "brown" : "black"} >
            <Menu> - - - - {menu} - - - - </Menu>
          </Cajon>
        </StandCaja>}
        <Center click={click} onClick={handleClick}>
          {click || <ClickAqui> Click aqui </ClickAqui>}
          <Pacman pacmanSize={click ? 110 : 250} />
          <Teleprompter animationDuration={100} textSize={click ? 1.5 : 3}
            letterSpacing={click ? 0.5 : 1} bottom={click ? 20 : 35} text={currentText} />
        </Center>
        <WORK to="/work"  >
          <motion.h2
            initial={{
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            animate={{
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1 }
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </WORK>
        <BottomBar>
          <ABOUT to="/about"  >
            <motion.h2
              initial={{
                y: -200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2
              initial={{
                y: -200,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              animate={{
                y: 0,
                transition: { type: 'spring', duration: 1.5, delay: 1 }
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              My Skills
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      <div style={{ cursor: 'pointer' }} onClick={handleClick}>
        {click ? <Intro click={click} /> : null}
      </div>
    </MainContainer>
  );
}

export default Main; 
