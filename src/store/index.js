import { createStore } from 'vuex'
import UsersService from "../services/users-service";
import TasksService from '@/services/tasks-service';

export default createStore({
  state: {
    user: null,
    tasks: []
  },
  getters: {
    currentUser(state){
      return state.user
    },
    allTasks(state){
      return state.tasks
    }
  },
  mutations: {
    SET_USER(state, user) { 
      state.user = user;
    },
    SET_TASKS(state, tasks){
      state.tasks = tasks;
    },
    ADD_TASK(state, task){
      state.tasks.push(task)
    },
    UPDATE_TASK(state, task){

    },
    COMPLETE_TASK(state, task){
    },
    DELETE_TASK(state, taskId){
      state.tasks = state.tasks.filter(t => t.id !== taskId)
    },
  },
  actions: {
    async fetchUser({commit}, username){
      const user = await UsersService.get(username);
      commit('SET_USER', user);
    },
    async createUser({commit}, user){
      const createdUser = await UsersService.create(user);
      commit('SET_USER', createdUser);
    },
    async fetchTasks({commit}, userId){
      const tasks = await TasksService.getAll(userId);
      commit('SET_TASKS', tasks)
    },
    async createTask({commit}, task){
      const createdTask = await TasksService.create(task.userId, task);
      commit('ADD_TASK', createdTask)
    },
    async updateTask({commit}, task){
      const updatedTask = await TasksService.update(task.userId, task.id, task);
      commit('UPDATE_TASK', updatedTask)
    },
    async completeTask({commit}, task){
      task.completed = !task.completed;
      const completedTask = await TasksService.update(task.userId, task.id, task)
      commit('COMPLETE_TASK', completedTask)
    },
    async deleteTask({commit}, {userId, taskId}){
      const deletedTask = await TasksService.delete(userId, taskId);
      if(deletedTask){
        commit('DELETE_TASK', taskId)
      }
    }

  },
  modules: {
  }
})
