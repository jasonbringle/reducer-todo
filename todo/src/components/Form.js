import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    z-index: auto;
    display:flex;
    flex-direction:row;
    width:100%;
    justify-content:space-between;
`

const AddButton = styled.div`
    display:flex;
    flex-direction:column;
    padding-left: 3rem;
    padding-top: 1rem;
`

const FormDiv = styled.div`
    display:flex;
    flex-direction:column;
    padding-left: 1em;
    padding-top: 1rem;
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
const ClearDivLabel = styled.div`
    text-shadow: 0px 20px 30px black;

`

const ClearButton = styled.div`
    display:flex;
    flex-direction:column;
    padding-left: 1rem;
    padding-top: 1rem;
`

 const Form = (props) => {
    const [newTodo, setNewTodo] = useState("");

    const handleChanges = e => {
        setNewTodo(e.target.value);    };

    const addTodo = (e) => {
        e.preventDefault();
        console.log(props.state)
        //WHy cant I get this test to work for duplicate item names?????
        if(newTodo !== '' && newTodo !== props.state.filter(note=>note.item === newTodo).join()){
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
                    <input 
                    placeholder="New Todo"
                    value={newTodo}
                    onChange={handleChanges}
                    ></input>
                </FormDiv>
                <AddButton>
                    <button>Add</button>
                </AddButton>
                
            </form>
            <ClearDiv>

                <ClearDivLabel>
                    <label>Clear Selected Todos</label>
                </ClearDivLabel>

                <ClearButton>
                    <button onClick={clearSelectedTodos}>Clear</button>
                </ClearButton>
                
            </ClearDiv>
        </FormContainer>
    )
}
export default Form;