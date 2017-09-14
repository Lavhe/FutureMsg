<style lang="stylus" scoped>



</style>

<template>

<div id="chatPanel">
    <q-chat-message label='Sunday, 12:43' />
    <q-chat-message :name="Receiver" avatar="statics/boy-avatar.png" :text="['I need cash','Staff']" stamp="4 minutes ago" sent />
    <q-chat-message :name="Sender" avatar="statics/linux-avatar.png" :text="['You mean mine??']" stamp="7 minutes ago" />
</div>

</template>

<script>
import {
  QChatMessage,
} from 'quasar'
export default {
    name: "chatPanel",
    components: {
      QChatMessage
    },
    data() {

    },
    props: ['Sender', 'Receiver']
}

</script>
