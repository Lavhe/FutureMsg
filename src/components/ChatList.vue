<style lang="stylus" scoped>



</style>

<template>

<div>
  <q-list highlight>
      <q-list-header class="center">Chats</q-list-header>
      <q-item>
          <q-item-side avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" />
          <q-item-main label="John Doe" />
          <q-item-side right>
              <q-item-tile icon="chat_bubble" color="green" />
          </q-item-side>
      </q-item>
      <q-item>
          <q-item-side avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" />
          <q-item-main label="John Doe" />
          <q-item-side right>
              <q-item-tile icon="chat_bubble" color="blue" />
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
  QItemTitle,
  QTabs,
  QTab
} from 'quasar'

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
      QItemTitle,
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
