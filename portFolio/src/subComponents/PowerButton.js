import React from 'react';
import styled, { keyframes } from 'styled-components';
import { PowerBtn } from '../components/AllSvgs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from 'styled-components';


const shake1 = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: rotate(-10deg);
  }
  20%, 40%, 60%, 80% {
    transform: rotate(10deg);
  }
`;


const shake3 = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  20%, 50%, 80% {
    transform: rotate(360deg);
  }
  40%, 60% {
    transform: rotate(-360deg);
  }
`;
const shake4 = keyframes`
0%, 100% {
  transform: perspective(400px) rotateY(0deg);
}
50% {
  transform: perspective(400px) rotateY(180deg);
}
`;


const Power = styled.button`
  position: absolute;
  top: 0.7rem;
  left: 612px;
  background-color: transparent;
  padding: 0.3rem;
  border: none;
  height: 3.5rem;
  width: 3.5rem;
  display: flex;
  justify-content: center; 
  align-items: center;
  z-index: 42;
  cursor: pointer;




  &:hover {
    background-color: transparent;
    animation: ${({ currentShake }) => currentShake || 'none'} 0.8s ease-in-out;
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const getRandomShake = (lastShake) => {
  const shakes = [shake4, shake3, shake4, shake3, shake1];
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * shakes.length);
  } while (shakes[randomIndex] === lastShake);

  return shakes[randomIndex];
};


const StyledPowerBtn = styled(PowerBtn)`
  fill: ${(props) => props.fill};
  transition: fill 0.5s;
  `;


const PowerButton = () => {
  const [currentShake, setCurrentShake] = useState(null);

  const theme = useTheme();

  return (
    <Power
      onMouseEnter={() => setCurrentShake(getRandomShake(currentShake))}
      onMouseLeave={() => setCurrentShake(null)}
      currentShake={currentShake}
    >
      <NavLink to="/">
        <StyledPowerBtn to="/" width={50} height={50} fill={theme.text} />
      </NavLink>
    </Power>
  );
};

export default PowerButton;