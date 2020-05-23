import React from 'react'
import Form from './Form'
import styled from 'styled-components'

const HeaderTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    background-image: linear-gradient( black,transparent);
    height: 250px;
    color:white;
    font-family: 'Comfortaa', cursive;
  
    position: fixed;
  top: 0;
  width: 100%

`

export default function Header(props){
    return(
        <HeaderTop>
            <h1>THINGS TO DO</h1>
            <Form state={props.state} dispatch={props.dispatch}/>
        </HeaderTop>
    )
}