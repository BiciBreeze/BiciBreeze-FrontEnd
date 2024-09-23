import axios from 'axios';

export default {
    getUser() {
        return axios.get('/api/user');
    },
    updateUser(user) {
        return axios.put('/api/user', user);
    }
};