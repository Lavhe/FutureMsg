/* eslint-disable */
<style lang="stylus" scoped>

</style>
<template>
<div>
  <q-list highlight>
    <!--TODO : MAke up your mind as to how to create a new msg since all the code is on the home vue (home.vue) then change the on click below -->
    <q-item @click="$refs.layoutModal.open()" class="bg-light text-bold hoverable waves-effect" role="button" slot="title">
      <q-item-side icon="star" />
      <q-item-main label="New Msg" sublabel="Create a new Msg" />
    </q-item>
    <q-list-header class="center text-center">Chats</q-list-header>
    <q-collapsible icon-toggle v-for="chat in chats" :avatar="chat.Receiver.Avatar" :label="chat.Receiver.Name">
        <q-item :to="{ name:'chat' , params:{Receiver:chat.Receiver,MsgTitle:chat.Chat[0].Title} }" :class="{'bg-light text-bold':chat.Read}">
          <q-item-main>
            <q-item-tile sublabel lines="2">
              <span v-if="chat.Title">{{ chat.LastMsg.Msg }}</span>
            </q-item-tile>
          </q-item-main>
          <q-item-side right>
            <q-item-tile :icon="chat.Read ? 'mail' : 'drafts'" :color="chat.Read ? 'primary' : 'secondary'" />
            <q-item-tile stamp>{{ chat.LastMsg.PostedDateTime }}</q-item-tile>
          </q-item-side>
        </q-item>
        <q-item-separator />
      </q-collapsible>
  </q-list>
</div>
</template>

<script>
import {
  QCollapsible,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile,
  QTabs,
  QTab
}
from 'quasar'

export default {
  name: 'chats',
  components: {
    QCollapsible,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QTab,
    QTabs
  },
  data() {
    return {
      chats: []
    }
  },
  mounted() {
    //do something after mounting vue instance
    var self = this;
    this.$http.post('/api/getChats').then(response => {
      console.warn("We back");
      console.warn(response.data);
      self.chats = response.data;
    });
  }
}
</script>
