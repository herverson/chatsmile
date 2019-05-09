<template>
  <div class="chat container">
    <h2 class="center cyan-text">Chat Smile</h2>
    <div class="card lime accent-2">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="mensagem in mensagens" :key="mensagem.id">
            <span class="cyan-text">{{ mensagem.nome }}</span>
            <span class="grey-text text-darken-1">{{ mensagem.content }}</span>
            <span class="grey-text time">{{ mensagem.timestamps }}</span>
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
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  props: ['nome'], 
  components: {
    NovaMensagem
  },
  data () {
    return {
      mensagens: []
    }
  },
  created () {
    let ref = db.collection('mensagens')

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == 'added' )
        {
          let doc = change.doc
          this.mensagens.push({
            id: doc.id,
            nome: doc.data().nome,
            content: doc.data().content,
            timestamps: moment(doc.data().timestamps).locale('pt-br').format('LLL')
          })
        }
      });
        
    })
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
  font-size: 0.8em;
}

.messages {
  max-height: 300px;
  overflow: auto;
}

.messages::-webkit-scrollbar {
  width: 3px;
}

.messages::-webkit-scrollbar-track {
  background-color: #ddd;
}

.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>
