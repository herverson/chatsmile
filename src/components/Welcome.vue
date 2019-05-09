<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align lime accent-2">
        <h2 class="cyan-text darken-2">Bem-vindo!</h2>
        <form @submit.prevent="entrarChat">
          <label for="name">Nome</label>
          <input placeholder="Digite seu nome..." type="text" name="nome" v-model="nome" class="validate">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn cyan darken-2">Entrar!</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      nome: null,
      feedback: null
    }
  },
  methods: {
    entrarChat() {
      if (this.nome) 
      {
        this.$router.push({ name: 'Chat', params: {nome: this.nome} })
      }
      else 
      {
        this.feedback = 'Insira seu nome para entrar!'
      }
    }
  }
}
</script>

<style>
  .welcome {
    max-width: 400px;
    margin-top: 100px;
  }
  .welcome h2 {
    font-size: 3em;
  }
  .welcome button {
    margin: 30px auto;
  }
</style>
