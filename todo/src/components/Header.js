import React from 'react'
import Form from './Form'
import styled from 'styled-components'

const HeaderTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    background-image: linear-gradient(rgb(66, 120, 255, 1),transparent);
    height: 250px;
    font-family: 'Comfortaa', cursive;`

export default function Header(props){
    return(
        <HeaderTop>
            <h1>Things For Me To Get Done</h1>
            <Form state={props.state} dispatch={props.dispatch}/>
        </HeaderTop>
    )
}