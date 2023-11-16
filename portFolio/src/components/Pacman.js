import React from 'react';
import './Pacman.css';
import { useTheme } from 'styled-components';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PacmanDiv = styled(motion.div)`
position: relative;
z-index: 10;
cursor: pointer;
`

const Pacman = ({ pacmanSize }) => {

  const theme = useTheme();

  return (
    <PacmanDiv initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', duration: 6, delay: 0 }}>

      <div className="pac-man-container">
        <div
          className="pac-man"
          style={{
            '--pacman-size': `${pacmanSize}px`,
            '--primaryClr': theme.primaryClr
          }}
        >
        </div>
      </div>
    </PacmanDiv>
  );
};

export default Pacman;
