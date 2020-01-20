const todosReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'ALL_TODOS':
            return [...action.payload]
        default:
            return state
    }
}

export default todosReducer;