const authReducer = (state, action) => {
    switch(action.type) {
        case 'REGISTER_SUCCESS':
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
            }
        case 'LOAD_USER':
            return {
                ...state,
                isAuthenticated: true
            };
        default:
            return {
                token: localStorage.getItem('token'),
                isAuthenticated: null 
            }
    }
}

export default authReducer;