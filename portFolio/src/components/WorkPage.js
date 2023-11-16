import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from 'styled-components'
import SocialIcons from "../subComponents/SocialIcons";
import { motion } from 'framer-motion'
import { useTheme } from "styled-components";
import { Espiral } from "./AllSvgs";
import Card from "../subComponents/Card";
import { Work } from "../data/WorkData";
import BigTitle from "../subComponents/BigTitle";





const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 700vh;
  


`

const Main = styled(motion.ul)`
  position: fixed;
  top: 8.5rem;
  left: calc(20rem - 15vw);
  display: flex;
  color: white;
  z-index: 1; 
  
`

const Rotate = styled.span`
display:block;
position: fixed;
right: 1rem;
top: 540px;
width: 80px;
height: 80px;
z-index: 1;
`



const WorkPage = () => {

  const ref = useRef(null);
  const espiral = useRef(null)

  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      espiral.current.style.transform = `rotate(` + window.pageYOffset + `deg)`;
    }
    window.addEventListener('scroll', rotate);
    return () =>
      window.removeEventListener('scroll', rotate)
  }, [])


  const theme = useTheme();


  return (

    <ThemeProvider theme={theme}>

      <Box>
        <SocialIcons />
        <Main ref={ref} initial="hidden" animate="show">
          {
            Work.map(d =>
              <Card key={d.id} data={d} />
            )
          }
        </Main>
        <Rotate ref={espiral}>
          <Espiral width={80} height={80} fill={theme.espiral} />
        </Rotate>
        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
}

export default WorkPage; 