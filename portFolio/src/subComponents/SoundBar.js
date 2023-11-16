import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useRef } from 'react'
import jazz from '../assets/audio/jazz.mp3'
import electric from '../assets/audio/electric.mp3'



const Box = styled.div`
display: flex;
cursor: pointer; 
position: absolute;
left: 1180px;
top:90px;
z-index: 20;




&>*:nth-child(1) {
  animation-delay: 0.2s;
}
&>*:nth-child(2) {
  animation-delay: 0.3s;
}
&>*:nth-child(3) {
  animation-delay: 0.4s;
}
&>*:nth-child(4) {
  animation-delay: 0.5s;
}
&>*:nth-child(5) {
  animation-delay: 0.6s;
}

`

const play = keyframes`
0% {
  transform: scale(1);
}
50% {
  transform: scale(2);
}
100% {
  transform: scale(1);
}
`

const Line = styled.span`
background: ${(props) => props.theme.text};
border: 1px solid ${(props) => props.theme.body};
transition: border 0.5s, color 0.5s;

animation: ${play} 1s ease infinite;
animation-play-state: ${props => (props.click ? "running" : "paused")};
height: 1rem;
width: 2px;
margin: 0 0.1rem;
`


const BotonSonido = styled.div`
font-size: 1.3rem;
margin-top: -3px;
margin-right: 3px;
`

const SoundBar = ({ clickMode }) => {

  const ref = useRef(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    // Cambiar la fuente del audio cuando clickMode cambie
    ref.current.src = clickMode ? electric : jazz;

    // Reiniciar el audio si estaba reproduciéndose antes del cambio
    if (click) {
      ref.current.play();
    }
  }, [clickMode, click]);

  const handleClick = () => {
    setClick(!click)

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }



  return (
    <Box onClick={handleClick} >
      <BotonSonido>
        {click ? "🎶" : "🔇"}
      </BotonSonido>
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />

      < audio ref={ref} loop />

    </Box>
  )
}

export default SoundBar