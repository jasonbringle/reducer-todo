import React, { useReducer } from 'react'
import reducer from '../reducers/index'

 const Form = (props) => {
    

    return(
        <div>
            <form>
                <label>Add Todo</label>

                <input 
                placeholder="New Todo"
                onChange={props.handleChanges}
                ></input>

                <button>ADD</button>
            </form>
        </div>
    )
}
export default Form;