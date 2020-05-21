import React from 'react'
import Form from './Form'

export default function Header(props){
    return(
        <div>
            <h1>Things for me to get done!!</h1>
            <Form state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}