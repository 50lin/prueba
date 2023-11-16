import styled, { ThemeProvider, keyframes } from 'styled-components';
import { useTheme } from 'styled-components';

const moveText = keyframes`
  to {
    transform: translateX(-100%);
  }
`;

const TeleprompterContainer = styled.div`
position: relative;
left: 50%;
bottom:  ${(props) => props.bottom}px;
  width: 500px;
  height: 2em;
  overflow: hidden;
  white-space: nowrap;
  padding: 5px;
  font-family: Arial, sans-serif;
  color: ${(props) => props.theme.comida};
  transition: color 0.5s;

  font-weight: bold;
  font-size: ${(props) => props.textSize}rem;
  letter-spacing: ${(props) => props.letterSpacing}rem;
`;

const TeleprompterText = styled.div`

cursor: default;
  display: inline-block;
  animation: ${moveText} ${(props) => props.animationDuration || 10000}s linear infinite;
`;


const Teleprompter = ({ animationDuration, textSize, letterSpacing, bottom, text }) => {

  const theme = useTheme();


  return (
    <>
      <ThemeProvider theme={theme}>

        <TeleprompterContainer textSize={textSize} letterSpacing={letterSpacing} bottom={bottom} >
          <TeleprompterText animationDuration={animationDuration} >
            {text}
          </TeleprompterText>
        </TeleprompterContainer>
      </ThemeProvider>
    </>
  );
};

export default Teleprompter;
