import React from 'react'
import styled from 'styled-components'

const Logo = styled.div`
display: inline-block;  
font-family: 'Source Sans Pro', sans-serif;
color: ${props => props.click ? props.theme.body : props.theme.text};
 transition: color 0.5s;
line-height: 1rem;
position: absolute;
left: 30px;
top: 2rem;
z-index: 3;
`

const LogoComponent = (props) => {

  return (
    <Logo click={props.click}>
      <>
        <h1 style={{ fontSize: '2.2rem', fontWeight: '600', marginBottom: '-010px' }}>Lino</h1>
        <br />
        <h1 style={{ fontSize: '1.1rem', fontWeight: '300' }}>codeLab</h1>
      </>
    </Logo>
  )
}

export default LogoComponent

