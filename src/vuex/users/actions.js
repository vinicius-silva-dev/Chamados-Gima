import axios from "axios"

export default {
  async login ({ commit }, data) {
    try {
      
      const result = await axios.post('http://localhost:3000/login',data)

      if(result) {
        // console.log(result)
        commit('loginUser', result)
        return result.data
        
        
      }
    } catch (error) {
      console.log(error)
    }
  }
}