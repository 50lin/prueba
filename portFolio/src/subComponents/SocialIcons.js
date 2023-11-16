import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Behance, LinkedIn } from "../components/AllSvgs";
import styled, { useTheme, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';



const growAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
`;


const Icons = styled.div`
  display: flex; 
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 363px;
  left: 2rem;
  z-index: 3;




& > *:not(:last-child) {
  margin: 0.5rem 0;
}

`

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.color};
  transition: background-color 0.5s, color 0.5s;

`


const GithubBtn = styled(Github)`
  fill: ${(props) => props.theme.text};
  transition: fill 0.5s, color 0.5s;

  &:hover {
    animation: ${growAnimation} 0.3s ease-in-out;
    transform: scale(1.5);
}
`;


const LinkedinBtn = styled(LinkedIn)`
  fill: ${(props) => props.theme.text};
  transition: fill 0.5s, color 0.5s;
  &:hover {
    animation: ${growAnimation} 0.3s ease-in-out;
    transform: scale(1.5);
}
`;

const BehanceBtn = styled(Behance)`
  fill: ${(props) => props.theme.text};
  transition: fill 0.5s, color 0.5s;
  &:hover {
    animation: ${growAnimation} 0.3s ease-in-out;
    transform: scale(1.5);
}
`;




const SocialIcons = (props) => {
  const theme = useTheme();
  const click = props.click


  const location = useLocation();


  return (
    <Icons isWorkPage={location.pathname === '/work'}>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1 }}

      >
        <NavLink style={{ color: 'inherit' }} to="https://github.com/50lin" target="_blank">
          <GithubBtn width={25} height={25} />
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
      >
        <NavLink style={{ color: 'inherit' }} to="https://github.com/50lin" target="_blank" >
          <LinkedinBtn width={35} height={35} />
        </NavLink>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: 'spring', duration: 1, delay: 1.4 }}
      >
        <NavLink style={{ color: 'inherit' }} to="https://github.com/50lin" target="_blank">
          <BehanceBtn width={25} height={25} />
        </NavLink>
      </motion.div>

      <Line color={click ? theme.body : theme.text}

        initial={
          {
            height: 0
          }
        }
        animate={
          {
            height: '8rem'
          }
        }
        transition={
          {
            type: "spring",
            duration: 1,
            delay: 0.8
          }
        }

      />

    </Icons>
  )
}

export default SocialIcons