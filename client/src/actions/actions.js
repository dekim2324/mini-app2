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

