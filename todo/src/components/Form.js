import React, { useReducer, useState } from 'react'
import initialState from '../reducers/index'
import reducer from '../reducers/index'

 const Form = () => {

    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);


    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    const addTodo = (e) => {
        e.preventDefault();
        dispatch({ type: "LIST_OF_TODOS", payload: newTodo });
        clearField()
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
        </div>
    )
}
export default Form;