/* eslint-disable */
<style lang="stylus" scoped>
.replyTab
  background-color red
  width 100%
</style>

<template>

  <div id="chatPanel">
    <q-chat-message label='Sunday, 12:43' />
    <q-chat-message :name="Receiver" avatar="statics/boy-avatar.png" :text="['I need cash','Staff']" stamp="4 minutes ago" sent />
    <q-chat-message :name="Sender" avatar="statics/linux-avatar.png" :text="['You mean mine??']" stamp="7 minutes ago" />
    <div class="row">
      <div class="replyTab col 12">
        <input v-on:keyup.enter="SendMessage" type="text" name="" v-model="TxtMessage" value="" />
        <q-btn class="pull-right" v-ripple floating v-on:click="SendMessage" red>
          <q-icon name="send"/>
        </q-btn>
      </div>
    </div>
  </div>

</template>

<script>
import {
  QChatMessage,
  QBtn,
  QIcon
} from 'quasar'
export default {
  name: "chatPanel",
  components: {
    QChatMessage,
    QBtn,
    QIcon
  },
  data() {
    return {
      TxtMessage : ''
    }
  },
  methods:{
    SendMessage:function(){
      console.log(this.TxtMessage + " is being sent!");
    }
  },
  props: ['Sender', 'Receiver']
}

</script>
