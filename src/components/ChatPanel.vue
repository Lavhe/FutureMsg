/* eslint-disable */
<style lang="stylus" scoped>
.replyTab
  background-color white
  width 100%
  height 40px
  position fixed
  bottom 0px
#TheChat
  padding-bottom 42px
</style>

<template>

  <div id="chatPanel">
    <div id="TheChat">
      <q-chat-message label='Sunday, 12:43' />
      <div v-for="chat in chats">
        <q-chat-message :name="chat.name" :avatar="chat.avatar" :text="chat.Msgs" :stamp="chat.stamp" :sent="chat.isSent" />
      </div>
    </div>
    <div class="row">
      <div class="replyTab row shadow-up-6">
        <q-input class="col-10" v-on:keyup.enter="SendMessage" type="text" name="" v-model="TxtMessage" value=""/>
        <q-btn class="col-2" v-ripple floating v-on:click="SendMessage" red>
          <q-icon name="send"/>
        </q-btn>
      </div>
    </div>
  </div>

</template>

<script>
import {
  QChatMessage,
  QInput,
  QBtn,
  QIcon
} from 'quasar'
export default {
  name: "chatPanel",
  components: {
    QChatMessage,
    QInput,
    QBtn,
    QIcon
  },
  data() {
    return {
      TxtMessage : '',
      ReceiverMsgs:['I need cash','Staff'],
      SenderMsgs:['You mean mine??'],
      chats:[{
        avatar:'statics/quasar-logo.png',
        isSent:false,
        Msgs:["You and i know"],
        name:'',
        stamp:'4 minutes ago'
      }]
    }
  },
  methods:{
    SendMessage:function(){

        // GET /someUrl
        this.$http.get('/api/chats').then(response => {

          console.warn("Inside the vue resource");
          console.log(response.body);

        }, response => {
          console.error(response);
        });

      if(this.chats.length && this.chats[this.chats.length - 1].isSent){
        this.chats[this.chats.length - 1].Msgs.push(this.TxtMessage);
        this.chats.push({
          avatar:'statics/FutureMsg_Icon.png',
          isSent:true,
          Msgs:[this.TxtMessage],
          name:this.Receiver,
          stamp:'14 minutes ago'
        });
      }else{
        this.chats.push({
            avatar:'statics/FutureMsg_Icon.png',
            isSent:true,
            Msgs:[this.TxtMessage],
            name:self.Receiver,
            stamp:'14 minutes ago'
      });
      }

      //SCroll to bottom
      document.getElementById("TheChat").scrollTop = document.getElementById("TheChat").scrollHeight;
      this.TxtMessage = "";
    }
  },
  mounted:function(){
          var self = this;
          setInterval(function(){
          self.chats.push({
              avatar:'statics/quasar-logo.png',
              isSent:false,
              Msgs:["Here you go"],
              name:self.Sender,
              stamp:'24 minutes ago'
        });
      },5000);
  },
  props: ['Sender', 'Receiver']
}

</script>
