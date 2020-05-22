export const initialState = [
    {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
    }
];

export const reducer = (state, action) => {
    switch (action.type){
        case "LIST_OF_TODOS": 
            return [...state, {item: action.payload, completed: false, id: new Date()}];
        case "TOGGLE_COMPLETED": 
            return(
                // console.log("ID COMING FROM MAPPING OVER CLICKED TODO", action.payload)
                // console.log("STATE COMING FROM INDEX.js", state)
            state.map(singleTodo => {
                // console.log("TODO.ID", singleTodo.id)
                // console.log("ID COMING FROM MAPPING OVER CLICKED TODO", action.payload)
                // console.log("SPREAD TODO", {...singleTodo})
                // console.log("singleTodo completed", singleTodo.completed)
                if (singleTodo.id === action.payload){
                  return {
                    ...singleTodo,
                    completed: !singleTodo.completed
                  };
                } 
                return singleTodo;
                }
            ));
        case "CLEAR-SELECTED-TODOS":
                return (state.filter(item => {
                    return !item.completed})
                )
            default:
            return state;
    }
};