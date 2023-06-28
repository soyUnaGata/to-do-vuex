import { createStore } from 'vuex'
import UsersService from "../services/users-service";

export default createStore({
  state: {
    user: null,
  },
  getters: {
    currentUser: state => state.user
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    async fetchUser({commit}, username){
      console.log(username)
      const user = await UsersService.get(username);
      commit('SET_USER', user);
    },
    async createUser({commit}, user){
      const createdUser = await UsersService.create(user);
      commit('SET_USER', createdUser);
    },
  },
  modules: {
  }
})
