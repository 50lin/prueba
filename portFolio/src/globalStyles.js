import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*,*::before,*::after,h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  
}


h1,h2,h3,h4,h5,h6 {
  display: inline-block;
}



body {
  position: relative; 
  min-width: 1300px;
  
  max-width: 1300px;
  
  max-height: 636px;
  
  background-color: ${props => props.clickMode ? "black" : "white"};

  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Source Sans Pro',sans-serif;
  user-select: none;

}







`

export default GlobalStyles;