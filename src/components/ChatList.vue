/* eslint-disable */
<style lang="stylus" scoped>

</style>
<template>

  <div>
    <q-list highlight>
      <q-list-header class="center text-center">Chats</q-list-header>
      <q-item :class="{'bg-light':a % 2}" v-for="a in 10">
        <q-item-side avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" />
        <q-item-main :label="'Mpho Doe ' + a" sublabel="I do not miss you"/>
        <q-item-side right>
          <q-item-tile :icon="a % 2 ? 'mail' : 'drafts'" :color="a % 2 ? 'primary' : 'secondary'" />
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
      msg: 'sac'
    }
  }
}

</script>
