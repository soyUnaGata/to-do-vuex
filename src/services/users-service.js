import api from './api'

class UsersService {
    async get(userId){
       return await api.get(`/users/${userId}`).then(response => response.data);
    }

    async create (value){
        return await api.post(`/users`), JSON.stringify((value)).then(response => response.data)
    }
}

export default new UsersService();