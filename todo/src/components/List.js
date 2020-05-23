import React from 'react'
import "../App.css"
import styled from 'styled-components'

const TodoList = styled.div`
    display:flex;
    flex-wrap:wrap;
`

export default function List (props) {
// console.log("state after click in LIST.js", props.state)

    return(
        <TodoList>
            {props.state.map(todo => 
                <div key={todo.id} className="todoContainer">
                    <div className="todo" >
                        <div className={`active${todo.completed ? " no" : ""}`}
                            onClick={() => {props.dispatch({ type: "TOGGLE_COMPLETED", payload: todo.id })}}
                        >{todo.item}
                        </div>    
                    </div>
                </div>)
            }
        </TodoList>
    )
}