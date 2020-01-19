import { combineReducers } from 'redux';

const alertReducer = (state = false, action) => {
    switch(action.type) {
        case 'SET_ALERT':
            return action.payload
        case 'CLEAR_ALERT':
            return action.payload
        default:
            return state
    }
}

export default alertReducer;

// // export default alertStatus;
// export default combineReducers({
//     alertStatus,
//     emailStatus
// })