import React from 'react';
import { clearAlert } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const Alert = () => {
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alertReducer);

    if(alert && alert === 'passwords do not match') {
                setTimeout(() => dispatch(clearAlert()), 5000)
        return (
            <div className='alert'>
               <i className="fas fa-exclamation-circle"></i>{' '}
               Passwords Do Not Match{' '}
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}


export default Alert;