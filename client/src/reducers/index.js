import { combineReducers } from 'redux';
import alertReducer from './alerts';
import authReducer from './auth';

const rootReducer = combineReducers({
    alertReducer,
    authReducer
});

export default rootReducer;