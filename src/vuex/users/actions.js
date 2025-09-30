import axios from "axios"

export default {
  async createUser ({ commit }, data) {
    try {
      console.log(data)
      const result = await axios.post('http://localhost:3333/createUser',data)
      console.log(result)
      if(result) {
        // console.log(result)
        commit('createUser', result)
        return result.data
      } 
    } catch (error) {
      throw new Error(error.message)
    }
  },

  async login ({ commit }, data) {
    try {
      if(data.isUser === '') {
        throw new Error('Precisa dizer qual é o tipo de perfil que esta logando.')
      }

      if(data.isUser === 'usuario') {

        const newData = {
          email: data.email,
          password: data.password
        }
        const result = await axios.post('http://localhost:3333/auth',newData)
        
        if(result) {
          commit('loginUser', result)
          return result.data
        }
      }

      const newData = {
        email: data.email,
        password: data.password
      }
      const result = await axios.post('http://localhost:3333/authanalista',newData)
        
        if(result) {
          commit('loginUser', result)
          return result.data
        }
    } catch (error) {
      console.log(error)
    }
  },

  async getUserById({commit}, data) {
    try {
      const {userId, token} = data
      const result = await axios.get(`http://localhost:3333/perfil/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if(result) {
        commit('user', result.data.user)
        return result.data.user
      }
    } catch (error) {
      // console.log(error)
      return null
    }
  }
}