import React from 'react'
import Form from './Form'

export default function Header(props){
    return(
        <div>
            <h1>Things for me to get done!!</h1>
            <Form todos={props.todos} handleChanges={props.handleChanges}/>
        </div>
    )
}