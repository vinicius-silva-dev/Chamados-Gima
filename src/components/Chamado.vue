  <template>
    <v-card
      class="mx-auto my-6 container"
      elevation="5"
      max-width="290"
      height="150"
      border="xs"
      :color="bgColorText"
    >
      <router-link :to="`/home/detalhechamado/${id}`"  :class="colorText">
        <div class="codChamado">
          <span>N° {{codigo}}</span>
      </div>
      <v-card-item >
        <v-card-title class="title">
          {{title}}
        </v-card-title>
        <div class="separador"></div>
        <!-- <v-card-subtitle>
          Card subtitle secondary text
        </v-card-subtitle> -->
      </v-card-item>
      <v-card-text 
        class="descricao"
      >
        {{descricao}}
      </v-card-text>
      </router-link>
      
    </v-card>
</template>


<script>
export default {
  name: "theChamado",
  props: {
    id: {
      type: String
    },
    codigo: {
      type: Number,
      default: 12458
    },
    title: {
      type: String,
      default: "Card title"
    },
    descricao: {
      type: String,
      default: "Temos algumas duvidas com relação a envio de pesquisa para os clientes e responder questionario..."
    },
    color: {
      type: String,
      default: "#EDEDE3"
    },
    prioridade: {
      type: String,
      default: "Medio"
    },
  },

  computed: {
    colorText() {
      const classColorText = this.prioridade === "Medio" ? "colorTextBlack" : this.prioridade === "Baixo" || this.prioridade === "Alto" ? "colorTextWhite" : ''

      return classColorText
    },
    bgColorText() {
      const classColorText = this.prioridade === "Medio" ? "#EDEDE3" : this.prioridade === "Baixo" ? "#008000" : "#FF0000"

      return classColorText
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
    
  }
  .colorTextBlack {
    color: #000;
  }
  .colorTextWhite {
    color: #FFFFFF;
  }

  .container{
    cursor: pointer;
    
  }
  .codChamado{
    font-size: 12px;
    font-weight: 500;
    margin-left: 20px;
  }

  .title {
    font-size: 18px;
  }

  .descricao {
    font-size: 12px;
    font-weight: 400;
  }

  .separador {
    width: 100%;
    height: 1px;
    background: #000000;
    opacity: 0.2;
  }
</style>