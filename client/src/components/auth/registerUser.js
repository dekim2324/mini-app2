import axios from 'axios';
import { connect } from 'react-redux';
import { emailExists } from '../../actions/actions';

const registerUser = async userData => {
    
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

// const mapStateToProps = state => {
//     return {
//         emailStatus: state.emailStatus
//     }
// }

export default registerUser;