
export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const reducer = (state, action) => {
    switch (action.type){
        case "LIST_OF_TODOS":
            return [
            ...state,
            {
            item: action.payload,
            completed: false,
            id: new Date()
            }
            ];
        case "TOGGLE_COMPLETED":
                return [
                ...state,
                {
                completed: !false,
                }
                ];
            default:
            return state;
    }
};

