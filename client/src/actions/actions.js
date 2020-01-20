export const setAlert = data => {
    return {
        type: 'SET_ALERT',
        payload: data
    }
};
export const clearAlert = () => {
    return {
        type: 'CLEAR_ALERT',
        payload: false
    }
}

export const registerUser = data => {
    return {
        type: 'REGISTER_SUCCESS',
        payload: data
    }
}

export const loadUser = () => {
    return {
        type: 'LOAD_USER',
        payload: true
    }
}

export const addTodo = todo => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
};

export const getTodos = todos => {
    return {
        type: 'ALL_TODOS',
        payload: todos
    }
}