import React, { useState } from 'react'
import styled from 'styled-components'

const FormContainer = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-between;
`
const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid grey;
    border-radius: 3px;
    width: 6em;
`
const ClearButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid grey;
    border-radius: 3px;
    width: 6em;
`
const FormDiv = styled.div`
    display:flex;
    flex-direction:column;
    padding-left: 1em;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
`
const ClearDiv = styled.div`
    display:flex;
    flex-direction:column;
    padding-right:1em;
    color:white;
    align-items:flex-end;
    font-family:Arial, Helvetica, sans-serif;
`

 const Form = (props) => {
    const [newTodo, setNewTodo] = useState("");
    // const [state, dispatch] = useReducer(reducer);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        if(newTodo !== ''){
        props.dispatch({ type: "LIST_OF_TODOS", payload: newTodo });
        clearField()}
    }

    const clearSelectedTodos = () => {
        props.dispatch({ type: "CLEAR-SELECTED-TODOS", payload: props.state})
    }

    const clearField = () => {
        setNewTodo("")
      }

    return(
        <FormContainer>
            <form onSubmit={addTodo}>
                <FormDiv>
                <label>Todo Name</label>

                <input 
                placeholder="New Todo"
                value={newTodo}
                onChange={handleChanges}
                ></input>
                </FormDiv>

                <Button>ADD</Button>
            </form>
            <ClearDiv>
            <label>Clear Selected Todos</label>
            <ClearButton onClick={clearSelectedTodos}>Clear</ClearButton>
            </ClearDiv>
        </FormContainer>
    )
}
export default Form;