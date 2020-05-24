import React from 'react'
import Form from './Form'
import styled from 'styled-components'

const HeaderTop = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-image: linear-gradient( black,transparent);
    height: 250px;
    color:white;
    font-family: 'Playfair Display', serif;
    font-size:2rem;
    position: fixed;
    top: 0;
    width: 100%;
`

export default function Header(props){
    return(
        <HeaderTop>
            <h1>Things To Do</h1>
            <Form state={props.state} dispatch={props.dispatch}/>
        </HeaderTop>
    )
}