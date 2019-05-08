<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Bem-vindo!</h2>
        <form @submit.prevent="entrarChat">
          <label for="name">Insira seu nome</label>
          <input type="text" name="nome" v-model="nome">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn teal">Entrar!</button>
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
