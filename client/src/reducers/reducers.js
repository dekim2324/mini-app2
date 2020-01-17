import { combineReducers } from 'redux';

const alertStatus = (state = false, action) => {
    switch(action.type) {
        case 'SET_ALERT':
            return action.payload
        case 'CLEAR_ALERT':
            return action.payload
        default:
            return state
    }
}

// export default alertStatus;
export default combineReducers({
    alertStatus
})