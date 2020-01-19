import axios from 'axios';
import { setAlert } from '../../actions/actions';

import { useDispatch, useSelector } from 'react-redux';

const registerUser = async userData => {
    const useDispatch = useDispatch();
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post('/api/users', userData, config);

    } catch (err) {
        console.error(err.message)
        // If email already exists, it will be caught here:

    }
}

export default registerUser;