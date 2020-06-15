import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

class UserService {
    async getAllUsers() {
        const url = `${API_URL}/users/`;
        return axios.get(url).then((r) => r.data);
    }

    async getUser(id) {
        const url = `${API_URL}/users/${id}/`;
        return axios.get(url).then((r) => r.data);
    }
}

export default UserService;
