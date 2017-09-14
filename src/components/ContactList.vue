<style lang="stylus" scoped>



</style>

<template>

<div>
  <q-list highlight>
      <q-list-header class="center">Contacts</q-list-header>
      <q-pull-to-refresh pull-message="" :handler="refreshContacts">
      <q-item>
          <q-item-side avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" />
          <q-item-main label="John Doe" />
          <q-item-side right>
              <q-item-tile icon="chat_bubble" color="green" />
          </q-item-side>
      </q-item>
      </q-pull-to-refresh>
  </q-list>
</div>

</template>

<script>
import {
  QBtn,
  QIcon,
  QPullToRefresh,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QTabs,
  QItemTile,
  Toast,
  QTab
} from 'quasar'

export default {
    name: 'contact',
    components: {
      QBtn,
      QIcon,
      Toast,
      QList,
      QListHeader,
      QItem,
      QItemSide,
      QItemMain,
      QItemTile,
      QPullToRefresh,
      QTabs,
      QTab
    },
    data(){
      return{
        msg: 'sac'
      }
    },
    methods: {
      refreshContacts(done) {
        Toast.create("Refreshing contacts");
        done();
      }
    }
}

</script>
