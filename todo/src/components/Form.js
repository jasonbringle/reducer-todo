import React, { useState } from 'react'


 const Form = (props) => {
    const [newTodo, setNewTodo] = useState("");
    // const [state, dispatch] = useReducer(reducer);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        props.dispatch({ type: "LIST_OF_TODOS", payload: newTodo });
        clearField()
    }

    const clearSelectedTodos = () => {
        props.dispatch({ type: "CLEAR-SELECTED-TODOS", payload: props.state})
    }

    const clearField = () => {
        setNewTodo("")
      }

    return(
        <div>
            <form onSubmit={addTodo}>
                <label>Add Todo</label>

                <input 
                placeholder="New Todo"
                value={newTodo}
                onChange={handleChanges}
                ></input>

                <button>ADD</button>
            </form>
            <button onClick={clearSelectedTodos}>Clear Selected Todos!</button>
        </div>
    )
}
export default Form;