<template>
  <div class="nova-mensagem">
    <form @submit.prevent="addMensagem">
      <label for="nova-mensagem">Nova mensagem </label>
      <input type="text" name="nova-mensagem" v-model="novaMensagem">
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'


export default {
  name: 'NovaMensagem',
  props: ['nome'],
  data(){
    return {
      novaMensagem: null,
      feedback: null
    }
  },
  methods: {
    addMensagem(){
      if (this.novaMensagem) 
      {
        db.collection('mensagens').add({
          content: this.novaMensagem,
          nome: this.nome,
          timestamps: Date.now()
        }).catch(err => {
          console.log(err)
        })
        this.novaMensagem = null
        this.feedback = null
      }
      else
      {
        this.feedback = "Você precisa inserir uma mensagem para enviar"
      }
    }
  }
}
</script>
