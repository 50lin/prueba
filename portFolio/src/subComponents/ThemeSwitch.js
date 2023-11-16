import React, { useState } from 'react';
import styled from 'styled-components';




const BtnContainer = styled.div`
  width: 140px;
  height: 43px;
  position: absolute;
  z-index : 10;
  left: 1110px; 
  top: 30px;
  cursor: pointer;



  `;

const Btn = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${(props) => (props.isChecked ? 'transparent' : 'transparent')};
  transition: background 0.5s;
  border-radius: 999px;
  padding: 10px;
  cursor: pointer;
  border: 2px solid ${(props) => (props.isChecked ? 'white' : 'black')};
`

const Knob = styled.div`
bottom: 7px;
  width: 30px;
  height: 30px;
  position: relative;
  transform: translateX(${(props) => (props.isChecked ? '90px' : '-6px')});
  transition: transform 1s;
  `;

const Top = styled.div`
transition: background-color 0.5s;
  background-color: #827d96;
  border-radius: 999px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  `;

const Light = styled.div`
  border-radius: 999px;
  position: absolute;
  width: ${(props) => (props.isChecked ? '125px' : '25px')};
  height: ${(props) => (props.isChecked ? '125px' : '25px')};
  background: radial-gradient(
    50% 50% at 50% 50%,
    yellow 10.42%,
    rgba(94, 199, 227, 0.791579) 27.08%,
    rgba(113, 204, 229, 0.35) 45.31%,
    rgba(144, 213, 231, 0.11) 65.1%,
    rgba(158, 216, 231, 0.02) 78.12%,
    rgba(177, 221, 233, 0) 95.83%
    );
    left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: width 1s, height 1s;
  `;

const BtnSwitch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  `;


const NoHighlight = styled.div`
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 10;
`;

const TextoBoton = styled.div`
transition: color 0.5s;

  margin-left: ${(props) => (props.isChecked ? '-30px' : '30px')};
  transition: margin-left 1s;
  color: ${(props) => (props.isChecked ? 'white' : 'black')};
  font-weight: 600;
`;

const ThemeSwitch = ({ toggleTheme }) => {
  const [isChecked, setChecked] = useState(false);

  const onBtnDown = () => {
    // Your logic for button down
  };

  const onBtnUp = () => {
    setChecked(!isChecked);
    toggleTheme();
    // Your logic for button up
  };





  return (

    <BtnContainer>

      <BtnSwitch onMouseDown={onBtnDown} onMouseUp={onBtnUp}>
        <Btn isChecked={isChecked}>
          <Knob isChecked={isChecked} >
            <Top ></Top>
            <Light isChecked={isChecked} ></Light>
          </Knob>
        </Btn>
        <NoHighlight >
          <BtnSwitch>
            <TextoBoton isChecked={isChecked}>
              {isChecked ? 'Work Mode' : 'Party Mode'}
            </TextoBoton>
          </BtnSwitch>
        </NoHighlight>
      </BtnSwitch>
    </BtnContainer>
  );
};

export default ThemeSwitch;
