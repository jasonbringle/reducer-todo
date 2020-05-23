import React, { useReducer } from 'react'
import Header from './components/Header'
import List from './components/List'
import "./App.css"
import { initialState } from './reducers/index'
import { reducer } from './reducers/index'
import styled from 'styled-components'
// import downtown from './img'

const MainDiv = styled.div`
    background-image: url(${require(`./img/downtown.jpg`)});
    background-size:cover;
    background-attachment: fixed;
    background: ${transparentize(0.1, '#fff')};
    background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')};
    background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')};
    height: 80rem;    
`

export default function App(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <MainDiv>
            <Header dispatch={dispatch} state={state} />
            <List dispatch={dispatch} state={state}/>
        </MainDiv>
    )
}


