import React, { useReducer } from 'react'
import { reducer, initialState } from '../reducers'

export default function List () {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const [newTodo, setNewTodo] = useState(initialState.item);

    return(
        <div>
            {state.item}
        </div>
    )
}