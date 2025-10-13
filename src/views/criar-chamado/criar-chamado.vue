<template>
  <div class="novoCasoContainer">
    <Header/>
    <main class="formCreateCase">
      <section class="formCreate" v-if="next">
        <v-select
          label="Qual loja você é ?"
          :items="['Fiat Gima Jaru', 'Fiat Gima Ariquemes', 'Fiat Gima Ouro Preto']"
          v-model="newChamado.loja"
          class="loja"
          type="text"
          variant="outlined"
          hide-details
        />

        <div class="nivelPrioridade">
          <h4>Qual o nível de prioridade ?</h4>
          <!-- Precisa validar qual opção esta marcada -->
          <v-checkbox label="Baixo" value="Baixo" v-model="newChamado.prioridade" hide-details base-color="green" color="green"></v-checkbox>
          <v-checkbox label="Médio" value="Medio" v-model="newChamado.prioridade" hide-details base-color="yellow" color="yellow"></v-checkbox>
          <v-checkbox label="Alto" value="Alto" v-model="newChamado.prioridade" hide-details base-color="red" color="red"></v-checkbox>
        </div>
        <div class="tipoChamado">
          <p>Qual é o tipo do chamado ?</p>
          <v-radio-group inline v-model="newChamado.tipoChamado">
            <v-radio label="Dúvida" value="Duvida" ></v-radio>
            <v-radio label="Erro no sistema" value="Erro no sistema"></v-radio>
            <v-radio label="Liberar Acesso" value="Liberar acesso"></v-radio>
            <v-radio label="Cadastro de Usuários" value="Cadastro de usuários"></v-radio>
          </v-radio-group>
        </div>
        <div class="titulo-descricao">
          <div class="tituloChamado">
            <label :style="{fontWeight: 600}">Título do chamado</label>
            <input 
              type="text"
              class="input"
              v-model="newChamado.title"
              placeholder="Escreva o título do chamado"
            >
          </div>
          <!-- <Input
            label="Título do chamado"
            placeholder="Escreva o título do chamado"
          /> -->
          <!-- <div class="tituloChamado">
            <label>Título do chamado</label>
            <input 
              type="text"
              class="input"
              placeholder="Escreva o título do chamado"
            >
          </div> -->
          <!-- <v-text-field 
            class="tituloChamado"
            label="Título do chamado"
            type="text"
            hide-details
            variant="outlined"
          /> -->
          <v-textarea 
            label="Descrição do chamado"
            type="text"
            v-model="newChamado.descricao"
            hide-details
            variant="outlined"
          />
        </div>
        <Button 
          title="Proximo"   
          @clickEvent="nextForm"
          padding="0px 30px 0px 35px"
          top="8px"
          left="5px"   
          fontSize="14px"
        />
      </section>
      <section class="anexos" v-else>
        <div class="input-anexo">
          <h4>Anexos:</h4>
          <Anexos
            v-model="arquivo"
          />
        </div>
        <!-- <p>{{newChamado.anexos[0]}}</p> -->
        <div class="tituloChamado">
          <label :style="{fontWeight: 600}">Telefone para contato</label>
          <input 
          type="text"
          class="input"
          v-model="newChamado.telefone"
          placeholder="Escreva o título do chamado"
          >
        </div>
        <div class="btn-anexos">
          <Button 
            title="Anterior"  
            @clickEvent="nextForm" 
            padding="0px 30px 0px 35px"
            top="8px"
            fontSize="14px"
          />
          <Button 
            title="Criar Caso"  
            @click="createTicket" 
            padding="0px 30px 0px 35px"
            top="8px"
            fontSize="14px"
          />
        </div>
      </section>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
// import Input from '@/components/Input.vue'
import Anexos from '@/components/Anexos.vue'
import {jwtDecode} from "jwt-decode"
import { mapActions, mapState } from 'vuex'
import Header from '@/components/Header.vue'

import Footer from '@/components/Footer.vue'

export default {
  name:  "CreateCase",
  components: {
    Button,
    Anexos,
    Header,
    Footer
  },
  data() {
    return {
      next: true,
      arquivo: '',
      newChamado: {
        loja: '',
        prioridade: '',
        tipoChamado: '',
        title: '',
        descricao: '',
        anexos: [],
        telefone: ''
      }
    }
  },
  
  computed: {
    ...mapState('chamados',['anexos']),
  },
  methods: {
    ...mapActions('chamados' ,['createChamado', 'createAnexos']),
    nextForm() {
      this.next = !this.next
    },

    async createAnexo() {
      const response = await this.createAnexos({file: this.arquivo})
       console.log(response)
      if(!response) {
        return false
      }

      return response
    },

    async createTicket() {
      if(this.validarForm(this.newChamado)) {
        try {
          if(this.arquivo !== '') {
            await this.createAnexo()
          }
  
          const token = window.localStorage.getItem("token")

          const payload = this.decodificarToken(token);
         
         if(this.anexos.anexosId) {
           this.newChamado.anexos.push(this.anexos.anexosId)
         }
          
          const data = {
            userId: payload?.sub,
            token,
            ...this.newChamado
          }

          const chamado = await this.createChamado(data)
          if(chamado) {
            window.alert(chamado.mensage)
            this.$router.push("/home").then(() => window.location.reload())

          }
          console.log(this.newChamado)
       
        } catch (error) {
          console.log('Deu ruim ', error)
        }
        
         
      } else {
        window.alert("Todos os campos precisam ser preenchidos!")
      }


    },

    decodificarToken(token) {
      try {
        const decoded = jwtDecode(token);
        
        return decoded;
      } catch (error) {
        console.error("Token inválido", error);
        return null;
      }
    },

    validarForm(form) {
      return Object.values(form).every(value => value !== '' && value !== null)
    }
  }
}
</script>

<style scoped>
  .novoCasoContainer{
    display: grid;
    width: 100vw;
    height: auto;
    /* max-height: 800px; */
    margin: 0px auto;
    /* border: 1px solid #D9D9D9; */
  }

  .formCreateCase {
    display: grid;
    padding: 10px;
    width: 80%;
    height: 100%;
    margin: 10px auto;
    /* border: 1px solid; */
  }

  .loja{
    width: 40%;
    margin-bottom: 20px;
  }

  .titulo-descricao{
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 80%;
    margin-bottom: 20px;
  }

  .anexos{
    display: grid;
    grid-template-rows: 50% 150px 100px;
    height: 80%;
    margin: 50px 0;
    /* border: 1px solid; */
  }

  .anexos h4 {
    align-self: center;
  }

  .btn-anexos {
    display: flex;
    justify-content: space-between;
    align-self: end;
  }

  .tituloChamado{
    display: grid;
    height: 50%;
    align-self: center;
  }
  .input {
    border: 1px solid #D9D9D9;
    border-radius: 10px;
    padding: 10px;
    margin: 10px 0px 15px 0px;
  }
  .input:hover{
    box-shadow: 0px 0px 5px 1px #D9D9D9;
  }
  /* .font{
    font-weight: 600;
  } */
</style>