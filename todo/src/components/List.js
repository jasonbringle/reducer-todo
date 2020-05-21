import React from 'react'

export default function List (props) {

console.log("STATE IN List.js", props.state)
    return(
        <div>
            {props.state.map(i => 
                <div className="todoContainer">
                    <div className="todo" >
                        <div className={`active${i.completed ? " no" : ""}`}
                            onClick={() => {props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.state })}}
                        >{i.item}
                        </div>    
                    </div>
                </div>)
            }
        </div>
    )
}