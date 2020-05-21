import React, { useState, useReducer } from 'react'
// import Header from './components/Header'
// import List from './components/List'
import { reducer, initialState } from './reducers/index'

export default function App(){
    const [newTodo, setNewTodo] = useState("");
    // const [ todos, setTodos ] = useState(initialState);

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
            <div>
            <h1>Things for me to get done!!</h1>
            </div>

            <form onSubmit={addTodo}>
                <label>Add Todo</label>

                <input 
                placeholder="New Todo"
                value={newTodo}
                onChange={handleChanges}
                ></input>

                <button>ADD</button>
            </form>

            <div>
                {state.map(i => <link 
                onClick={dispatch({ type: "TOGGLE_COMPLETED", payload: newTodo })} key={i.item}
                >
                {i.item}
                </link>
                )}
            </div>

        </div>
    )
}