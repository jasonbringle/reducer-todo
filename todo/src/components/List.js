import React, { useReducer } from 'react'
import reducer  from '../reducers/index'
import initialState from '../reducers/index'

export default function List (props) {
    
const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            {/* {state.map(i => 
                <div className="todoContainer">
                    <div className="todo" >
                        <div className={`active${i.completed ? " no" : ""}`}
                            onClick={() => {dispatch({ type: "TOGGLE_COMPLETED", payload: newTodo })}}>
                        {i.item}
                        </div>    
                    </div>
                </div>)
            } */}
        </div>
    )
}