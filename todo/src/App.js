import React from 'react'
import Header from './components/Header'
import List from './components/List'
import "./App.css"

export default function App(){
    // const [ todos, setTodos ] = useState(initialState);

    return(
        <div>
            <Header />
            <List />
        </div>
    )
}


