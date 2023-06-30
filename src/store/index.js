import { createStore } from 'vuex'
import UsersService from "../services/users-service";
import TasksService from '@/services/tasks-service';
import LanguagesService from '@/services/langs-services';

export default createStore({
  state: {
    user: null,
    tasks: [],
    languages: [],
    selectedLanguage: '' 
  },
  getters: {
    currentUser(state){
      return state.user
    },
    allTasks(state){
      return state.tasks
    },
    taskById: (state) => (taskId) => {
      return state.tasks.find(t => t.id == taskId)
    },
    allLanguages(state){
      return state.languages
    },
    currentLanguage(state){
      return state.selectedLanguage
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
      const index = state.tasks.findIndex(t => t.id === task.id);
      if(index !== -1){
        state.tasks.splice(index, 1, task)
      }
    },
    DELETE_TASK(state, taskId){
      state.tasks = state.tasks.filter(t => t.id !== taskId)
    },
    SET_LANGUAGES(state, langs){
      state.languages = langs;
    },
    SET_LANGUAGE_CODE(state, langCode) {
      state.selectedLanguage = langCode;
    }
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
      const completedTask = await TasksService.update(task.userId, task.id, { completed: !task.completed })
      commit('UPDATE_TASK', completedTask)
    },
    async deleteTask({commit}, {userId, taskId}){
      const deletedTask = await TasksService.delete(userId, taskId);
      if(deletedTask){
        commit('DELETE_TASK', taskId)
      }
    },
    fetchLanguges({commit}){
      const langs = LanguagesService.getAll();
      commit('SET_LANGUAGES', langs);
    },
    fetchLanguage({commit}){
      const langCode = LanguagesService.currentLanguageCode();
      commit('SET_LANGUAGE_CODE', langCode);
    },
    updateLanguage({commit}, langCode){
      LanguagesService.save(langCode);
      commit('SET_LANGUAGE_CODE', langCode);
    }
  },
  modules: {
  }
})
