import api from './api'

class UsersService {
    async get(username){
       const users = await api.get(`/users`).then(response => response.data).catch(error => console.error(error));
       return users.find(u => u.username === username);
    }

    async create (value){
        return await api.post(`/users`, JSON.stringify(value)).then(response => response.data)
    }
}

export default new UsersService();