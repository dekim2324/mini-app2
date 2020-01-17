import React from 'react';
import { connect } from 'react-redux';
import { clearAlert } from '../../actions/actions';

const Alert = props => {
    if(props.alertStatus) {
        setTimeout(() => props.clearAlert(), 5000)
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

const mapStateToProps = state => {
    return {
        alertStatus: state.alertStatus
    }
};
const mapDispatchToProps = {
    clearAlert
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert);