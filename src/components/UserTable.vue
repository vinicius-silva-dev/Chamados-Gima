<template>
  <div class="contianerTabela">
    <table class="tabela">
      <thead >
        <tr>
          <th
            v-for="itemHeader in headers"
            :key="itemHeader.title"
            
          >
            {{itemHeader.title}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.name"
        >
          <td>{{item.name}}</td>
          <td>{{item.email}}</td>
          <td>{{item.loja}}</td>
          <td class="acao">
            <v-icon @click="viewUser(item.id)">mdi-pencil</v-icon>
            <v-icon @click="OpenModalForDeleteUser">mdi-delete</v-icon>
          </td>
        </tr>
      </tbody>
    </table>
    <slot></slot>
  
  </div>
  <!-- <v-data-table
    :headers="headers"
    :items="items"
  >
  </v-data-table> -->

</template>
<script>

export default {
  name: 'theTabela',

  props: {
    items: {
      type: Array,
      default: () => [
        {
          id: 'user-1',
          name: 'Vinicius Silva Souza',
          email: 'suporteti_jaru@fiatgima.com.br',
          loja: 'Fiat Gima Jaru',
          password: '123456'
        },
        {
          id: 'user-2',
          name: 'Mario Silva Souza',
          email: 'suporteti_jaru@fiatgima.com.br',
          loja: 'Fiat Gima Jaru',
          password: '123456'
        },
      ]
    },
    headers: {
      type: Array,
      default: () => [
        { title: 'Nome', align: 'start', key: 'name' },
        { title: 'E-mail', key: 'email' },
        { title: 'Loja', key: 'loja' },
        { title: 'Actions', key: 'actions', sortable: false },
      ]
    }
  },
  data () {
    return {
      showModal: false,
      user: {}
    }
  },
  methods: {
   viewUser(id) {
      const user = this.items.find(item => item.id === id)

      // Object.assign(this.user, user)
      // this.showModal = true
      // console.log(this.user)
      this.$emit('viewUser', user)
    },
   editUser(id) {
      const user = this.items.find(item => item.id === id)

      Object.assign(this.user, user)

      for(let item in this.user) {
        this.user[item] = this.changedUser[item]
      }
      this.showModal = false
      console.log(this.user)
      this.$emit('editUser')
    },

    closeModal() {
      this.user = {}
      this.showModal = false
      this.$emit('closeModal')
    },

    OpenModalForDeleteUser() {
      this.showModal = true
      this.editingUser = false
      this.$emit('openModalForDeleteUser')
    },
  }

}
</script>

<style scoped>
  .contianerTabela {
    width: 100%;
    display: flex;
    justify-content: center;
    /* border: 1px solid; */
  }
  .tabela {
    width: 90%;
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
    /* border: 1px solid; */
  }
  .tabela th,
  .tabela td {
    /* border-top: 1px solid #ccc; */
    border-bottom: 1px solid #ccc;
    padding: 8px;
  }

  .acao {
    display: flex;
    justify-content: space-around;
  }

  .card {
    padding: 10px;
    display: grid;
    
  }

    .headerCard {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 15px auto;
    width: 95%;
    /* border: 1px solid; */
  }
  .imgListrado {
    max-width: 60px;
  }

  .form{
    width: 95%;
    /* border: 1px solid; */
    margin: 15px auto;
    
  }
  .btn {
    display: flex;
    gap: 10px;
    justify-content: end;
     /* border: 1px solid; */
  }

</style>
