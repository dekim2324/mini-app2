import React, { useState } from 'react'

const Signup = () => {



    return (
        <div className='form-container'>
            <h1>Account Register</h1>

            <form>
                <div className='form-group'>
                    <label htmlFor="name">Name: </label>
                    <input type="text"/>
                </div>

                <div className='form-group'>
                    <label htmlFor="email">Email: </label>
                    <input type="email"/>
                </div>

                <div className='form-group'>
                    <label htmlFor="password">Password: </label>
                    <input type="password"/>
                </div>

                <div className='form-group'>
                    <label htmlFor="password2">Confirm Password: </label>
                    <input type="password"/>
                </div>
            </form>
        </div>
    )
}

export default Signup;