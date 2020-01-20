import React, { useState } from 'react';
import axios from 'axios';

import { setAlert, registerUser } from '../../actions/actions';
import { useDispatch } from 'react-redux';

const Register = () => {

    const dispatch = useDispatch();

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

    const onSubmit = async e => {
        e.preventDefault();

        if(password !== password2) {
            // dispatch action
            dispatch(setAlert('passwords do not match'));
        } else {
            // registerUser(user)
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        
            try {
                const res = await axios.post('/api/users', user, config);

                // Dispatch action to set state: token, authenticated
                dispatch(registerUser(res.data));
        
            } catch (err) {
                console.error(err.message);            
                // If email already exists, it will be caught here:
                dispatch(setAlert('user already exists'))
            }
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

export default Register;