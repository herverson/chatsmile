<template>

<div class="message">
  <form @submit.prevent="addMensagem">      
    
      <div contenteditable="true"
        class="rich-editor-container"
        ref="textarea"
        @keypress.enter.prevent
        @input="updateBody($event.target.innerHTML)"
        @click="handleEditorClick"
        placeholder="Digite uma mensagem..."
        >
      </div>
      <div class="message-emoji">
        <emoji-picker @emoji:picked="handleEmojiPicked"
                      :data="data" />
      </div>
      <button class="btn-small cyan darken-2">Enviar<i class="material-icons right">send</i></button>
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
  </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import data from "@zaichaopan/emoji-picker/data/emojis.json"

export default {
  name: 'NovaMensagem',
  props: ['nome'],
  data(){
    return {
      data: data,
      body: null,
      novaMensagem: null,
      feedback: null
    }
  },
  methods: {
    addMensagem(){
      if (this.body) 
      {
        db.collection('mensagens').add({
          content: this.body,
          nome: this.nome,
          timestamps: Date.now()
        }).catch(err => {
          console.log(err)
        })
        this.body = null
        this.feedback = null
        this.$refs.textarea.innerHTML = null
      }
      else
      {
        this.feedback = "Você precisa inserir uma mensagem para enviar"
      }
    },
    updateBody(text) {
      //console.log(this.body)
      this.body = text;
    },
    handleEmojiPicked(emoji) {
      this.$refs.textarea.innerHTML = `${
        this.$refs.textarea.innerHTML
      } ${emoji}`;
      this.updateBody(this.$refs.textarea.innerHTML);
    },
    handleEditorClick() {
      this.focusEditor();
    },
    focusEditor() {
      this.$refs.textarea.focus();
    }
  },
  mounted() {
    this.focusEditor();
  }
  
}
</script>

<style scoped lang="scss">
.message {
  display: unset;
  .rich-editor-container {
    width: 100%;
    height: 3rem;
    border: 1px solid #0097a7;
    border-radius: 9999px;
    padding: 5px 40px 5px 15px;
    line-height: 3rem;
    &:focus {
      outline: none;
    }
  }
  .message-emoji {
    position: absolute;
    right: 30px;
    top: 8px;
  }
  [contenteditable="true"]:empty:before {
    content: attr(placeholder);
    color: #bdbdbd;
  }
}
</style>

