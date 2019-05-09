<template>
  <div class="chat container">
    <h2 class="center cyan-text">Chat Smile</h2>
    <div class="card lime accent-2">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="cyan-text">Nome</span>
            <span class="grey-text text-darken-1">Mensagem</span>
            <span class="grey-text time">Tempo</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <NovaMensagem :nome="nome" />
      </div>
    </div>
  </div>
  
</template>
<script>

import NovaMensagem from '@/components/NovaMensagem'

export default {
  name: 'Chat',
  props: ['nome'], 
  components: {
    NovaMensagem
  },
  data () {
    return {

    }
  }
}
</script>

<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}

.chat .time {
  display: block;
  font-size: 1.2em;
}
</style>
