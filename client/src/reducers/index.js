import { combineReducers } from 'redux';
import alertReducer from './alerts';
import authReducer from './auth';
import todosReducer from './todos';

const rootReducer = combineReducers({
    alertReducer,
    authReducer,
    todosReducer
});

export default rootReducer;