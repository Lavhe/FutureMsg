/* eslint-disable */
<style lang="stylus" scoped>

</style>
<template>
<div>
  <q-list highlight>
    <q-list-header class="center text-center">Chats</q-list-header>
    <q-item :class="{'bg-light text-bold':chat.Read}" v-for="chat in chats">
      <q-item-side :avatar="chat.Receiver.Avatar" />
      <q-item-main :label="chat.Receiver.Name" :sublabel="chat.LastMsg.Msg" />
      <q-item-side right>
        <q-item-tile stamp>{{ chat.LastMsg.PostedDateTime }}</q-item-tile>
        <q-item-tile :icon="chat.Read ? 'mail' : 'drafts'" :color="chat.Read ? 'primary' : 'secondary'" />
      </q-item-side>
    </q-item>
  </q-list>
</div>
</template>

<script>
import {
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
      console.warn(response.data);
      self.chats = response.data;
    });
  }
}
</script>
