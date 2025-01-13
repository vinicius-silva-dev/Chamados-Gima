import { createStore } from 'vuex'
import users from '@/vuex/users/index'

export default createStore({
  modules: {
    users
  }
})
