import React, { useReducer } from 'react'
import Header from './components/Header'
import List from './components/List'
import "./App.css"
import { initialState } from './reducers/index'
import { reducer } from './reducers/index'


export default function App(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            <Header dispatch={dispatch} state={state} />
            <List dispatch={dispatch} state={state}/>
        </div>
    )
}


