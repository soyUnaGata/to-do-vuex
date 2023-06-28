import api from './api'

class TasksService {
    async getAll(userId){
        return await api.get(`/users/${userId}/tasks`).then(response => response.data);
    }

    async get(userId, taskId){
        return await api.get(`/users/${userId}/tasks/${taskId}`).then(response => response.data);
    }

    async create (userId, value){
        return await api.post(`/users/${userId}/tasks`, JSON.stringify(value)).then(response => response.data)
    }

    async update (userId, taskId, value){
        return await api.put(`/users/${userId}/tasks/${taskId}`, JSON.stringify(value)).then(response => response.data)
    }

    async delete (userId, taskId){
        return await api.delete(`/users/${userId}/tasks/${taskId}`).then(response => response.data)
    }
}

export default new TasksService();