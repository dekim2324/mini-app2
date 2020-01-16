export const setAlert = () => {
    return {
        type: 'SET_ALERT',
        payload: true
    }
};
export const clearAlert = () => {
    return {
        type: 'CLEAR_ALERT',
        payload: false
    }
}