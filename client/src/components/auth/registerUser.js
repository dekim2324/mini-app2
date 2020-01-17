import axios from 'axios';

const registerUser = async userData => {
    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post('/api/users', userData, config);
        console.log('this is after result', res)
        console.log('this is after result', res.data)
    } catch (err) {
        console.error(err.message)
    }
}

export default registerUser;