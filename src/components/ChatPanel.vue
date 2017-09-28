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
  Toast,
  QBtn,
  QIcon
} from 'quasar'

export default {
  name: "chatPanel",
  components: {
    QChatMessage,
    QInput,
    Toast,
    QBtn,
    QIcon
  },
  data() {
    return {
      userID:'',
      receiverID:'',
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
        var self = this;
        console.warn(self.userID);

        this.$http.post('/api/sendText', {msg: self.TxtMessage ,senderID: self.userID,receiverID:self.receiverID }).then(response => {
          var answer = response.body;
          console.log(answer);
          Toast.create(answer);

          if(self.chats.length && self.chats[self.chats.length - 1].isSent){
            self.chats[self.chats.length - 1].Msgs.push(self.TxtMessage);
            self.chats.push({
              avatar:'statics/FutureMsg_Icon.png',
              isSent:true,
              Msgs:[self.TxtMessage],
              name:self.Receiver,
              stamp:'14 minutes ago'
            });
          }else{
            self.chats.push({
                avatar:'statics/FutureMsg_Icon.png',
                isSent:self,
                Msgs:[self.TxtMessage],
                name:self.Receiver,
                stamp:'14 minutes ago'
            });
          }

        this.TxtMessage = "";
        }, response => {
          console.error(response);
        });

      //SCroll to bottom
      document.getElementById("TheChat").scrollTop = document.getElementById("TheChat").scrollHeight;
    }
  },
  mounted:function(){
          this.receiverID = "59cd7fc5d2cb8f3ed95c81fb";
          this.userID = "59cd7f956fbd393e6f8bc28a";

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
