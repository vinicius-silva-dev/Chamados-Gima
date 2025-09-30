export default {
  loginUser(state, token) {
    state.token = token
  },

  createUser(state, user) {
    state.user = user
  },

  user(state, user) {
    state.gatUser = user
  }
}