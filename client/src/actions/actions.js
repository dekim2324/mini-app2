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

export const authenticateUser = () => {
    return {
        type: 'IS_AUTHENTICATED',
        payload: true
    }
}