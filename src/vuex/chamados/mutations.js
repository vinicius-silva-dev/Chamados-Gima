export default {
  chamados(state, chamados) {
    state.chamados = chamados
  },
  
  chamado(state, chamado) {

    state.chamado = chamado
  },

  chamadosAll(state, chamados) {
    state.chamadosAll = chamados
  },

  atualizacao(state, result) {
    state.atualizacao = result
  },

  atenderCase(state, result) {
    state.atendimento = result
  },

  encerrarCase(state, result) {
    state.encerrar = result
  },
  cancelarCase(state, result) {
    state.cancelar = result
  },

  anexos(state, response) {
    state.anexos = response
  }
}