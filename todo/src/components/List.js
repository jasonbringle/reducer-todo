import React, { useEffect } from 'react'
import "../App.css"
import styled from 'styled-components'
import {gsap} from 'gsap'

const TodoList = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    padding-top:200px;
`

export default function List (props) {
// console.log("state after click in LIST.js", props.state)
const gh = React.createRef();

useEffect(() => {
    gsap.to(gh.current, {duration: .25, rotation: 720, scale: 1} )
    }, [gh])

    return(
        <TodoList>
            {props.state.map(todo => 
                <div ref={gh} key={todo.id} className="todoContainer">
                    <div  className="todo" >
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