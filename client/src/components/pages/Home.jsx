import React, { useEffect } from 'react';
import Todos from '../../todos/Todos';

import { loadUser } from '../../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    // const dispatch = useDispatch();
    // const auth = useSelector(state => state.authReducer);

    // useEffect(() => {
    //     if(auth.token) {
    //         //if token, then stay authenicated & load user data
    //         dispatch(loadUser());
    //     }
    // // eslint-disable-next-line
    // }, [])

    return (
        <div>
            <Todos />
        </div>
    )
}

export default Home;