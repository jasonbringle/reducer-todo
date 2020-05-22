import React from 'react'
import "../App.css"


export default function List (props) {
console.log("state after click in LIST.js", props.state)

    return(
        <div>
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
        </div>
    )
}