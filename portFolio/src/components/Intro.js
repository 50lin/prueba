import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import DropE from '../assets/Images/profile-img2.png'

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 900px;
display: flex;
z-index: 1;


background:
 linear-gradient(
  to right,
  ${props => props.theme.body} 50%,
  ${props => props.theme.text} 50%
  ) bottom,
  linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%
    ) top;
    
    background-repeat: no-repeat;
    background-size: 100% 2px;

    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    
    
    `;

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
  position: absolute;
  bottom: 5%;
  left: 45%;
  transform: translate(-50%, 0%);
  width: 75%;
  height: auto;
}

`

const Text = styled.div`  
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
transition: color 0.5s;
text-align: center;
margin-left: 50px;
padding: 2rem;
cursor: pointer;


display: flex;
flex-direction: column;
justify-content: space-evenly;


&>*:last-child{
  color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
  transition: color 0.5s;

  font-size: calc(0.5rem + 1.5vw);
  font-weight: 300;
}


`



const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "365px" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>

          <h1>"Hola"</h1>
          <h3>Soy <span>Lino Hadeed</span></h3>
          <h6 >Full Stack Developer</h6>

        </Text>
      </SubBox>
      <SubBox>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className='pic' src={DropE} alt="" />
        </motion.div>

      </SubBox>
    </Box>
  )
}

export default Intro