import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/actions';
import registerUser from './registerUser';

const Register = props => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const { name, email, password, password2 } = user;

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();

        if(password !== password2) {
            // dispatch action
            props.setAlert()
        } else {
            registerUser(user)
        }

        setUser({
            name: '',
            email: '',
            password: '',
            password2: ''
        })
    }

    return (
        <div className='form-container'>
            <h1>Account Register</h1>

            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name='name' value={name} onChange={onChange} required/>
                </div>

                <div className='form-group'>
                    <label htmlFor="email">Email: </label>
                    <input type="email" name='email' value={email} onChange={onChange} required/>
                </div>

                <div className='form-group'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name='password' value={password} onChange={onChange} minLength='6' required/>
                </div>

                <div className='form-group'>
                    <label htmlFor="password2">Confirm Password: </label>
                    <input type="password" name='password2' value={password2} onChange={onChange} minLength='6' required/>
                </div>

                <input type="submit" value='Register' className='btn'/>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        registerUser: state.registerUser
    }
}
const mapDispatchToProps = {
    setAlert
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)