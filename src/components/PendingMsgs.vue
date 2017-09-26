/* eslint-disable */
<style lang="stylus" scoped>

</style>

<template>

  <div>
<!--
    <q-pull-to-refresh pull-message="" :handler="refreshContacts">

    </q-pull-to-refresh>
-->
    <q-list highlight>
      <q-list-header class="center">Pending</q-list-header>
      <q-item>
        <q-item-side avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" />
        <q-item-main label="John Doe" />
        <q-item-side right>
          <q-item-tile icon="chat_bubble" color="green" />
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
} from 'quasar'

export default {
  name: 'pending',
  components: {
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
  },
  data(){
    return{
      msg: 'sac'
    }
  }
}

</script>
