import { createStore } from 'vuex'
import users from '@/vuex/users/index'
import chamados from '@/vuex/chamados'

export default createStore({
  modules: {
    users,
    chamados
  }
})
