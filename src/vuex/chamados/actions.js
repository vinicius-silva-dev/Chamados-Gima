import axios from "axios"

export default {
  async createChamado ({ commit }, data) {
    try {
      const {userId, token ,...newData} = data
      const result = await axios.post(`http://localhost:3333/createchamado/${userId}`, newData,{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if(result) {
        commit('criarChamado', result.data)
        return result.data
      }

    } catch (error) {
      console.log(error)
      return error.response.status
    }
  },
  async createAnexos ({ commit }, data) {
    try {
      const files = data.file instanceof FileList
      ? Array.from(data.file)
      : Array.isArray(data.file)
        ? data.file
        : [data.file];

      const formData = new FormData()

      files.forEach((f) => {
      formData.append('file', f);
      // se o backend espera 'files[]', use: formData.append('files[]', f);
    });

    // DEBUG: ver o que tem no FormData
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
      // console.log(data.file)
      // formData.append("file", data.file)

      const result = await axios.post(`http://localhost:3333/anexos`, formData)


      console.log(result.data)
      if(result) {
        commit('anexos', result.data)
      }
      return result.data

    } catch (error) {
      console.log(error)
    }
  },

  async getChamados({commit}, data) {
    try {
      
      const result = await axios.get(`http://localhost:3333/listchamados/${data.id}`,{
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })

      
      if(result) {
        commit('chamados', result.data.chamados)
        return result.data.chamados
      }

    } catch (error) {
      console.log(error.data.statusCode)
      return error.data.statusCode
    }
  },

  async getChamadosAll({commit}, data) {
    try {
      const result = await axios.get(`http://localhost:3333/getchamados/${data.id}`,{
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })

      
      if(result) {
        commit('chamados', result.data.chamados)
        return result.data.chamados
      }

    } catch (error) {
      
      return error.response.status
    }
  },

  async getChamadoById({commit}, data) {
    try {
      
      const result = await axios.get(`http://localhost:3333/getchamado/${data.chamadoId}`,{
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })

      
      if(result) {
        commit('chamado', result.data.chamado)
        return result.data.chamado
      }

    } catch (error) {
      console.log(error)
      return error.response.status
    }
  },
  async createAtualizacao({commit}, data) {
    try {
      const dataAtualizacao = {
        descricao: data.descricao,
        anexosIds: data.anexosIds
      }

      const result = await axios.post(`http://localhost:3333/atualizacaochamado/${data.chamadoId}/${data.authorId}`, dataAtualizacao, {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })

      // console.log(result)
      if(result) {
        commit('atualizacao', result)
        return result
      }

      return result.data

    } catch (error) {
      console.log(error)
      return error.response.status
    }
  },
  async atenderChamado({commit},data) {
    try {
  
      // const { chamadoId, analistaId, status} = data
      const status = data.status
      console.log('Passou aqui', data)
      const result = await axios.put(`http://localhost:3333/atenderchamado/${data.chamadoId}/${data.analistaId}`, {status}, {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })

      if(result) {
        commit('atenderCase', result)
        return result
      }
      console.log('res: ',result)
      return result

    } catch (error) {
      console.log(error)
      return error.response.status
    }
  },
  async encerrarChamado({commit},data) {
    try {
  
      // const { chamadoId, analistaId, status} = data
      const descricaoEncerramento = data.descricaoEncerramento
      const result = await axios.put(`http://localhost:3333/encerrarchamado/${data.chamadoId}/${data.analistaId}`, {descricaoEncerramento}, {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })

      if(result) {
        commit('encerrarCase', result)
        return result
      }
      console.log(result)
      return result

    } catch (error) {
      console.log(error)
      return error.response.status
    }
  },
  async cancelarChamado({commit},data) {
    try {
  
      // const { chamadoId, analistaId, status} = data
      const descricao = data.descricao
      const result = await axios.put(`http://localhost:3333/cancelarchamado/${data.chamadoId}`, {descricao}, {
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })

      if(result) {
        commit('cancelarCase', result)
        return result
      }
      console.log(result)
      return result

    } catch (error) {
      console.log(error)
      return error.response.status
    }
  },

  async getAtualizacao({commit}, data) {
    try {
      
      const result = await axios.get(`http://localhost:3333/getatualizacao/${data.chamadoId}`,{
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      })

      
      if(result) {
        commit('atualizacao', result.data)
        return result.data
      }

    } catch (error) {
      console.log(error)
      return error.response.status
    }
  }
}