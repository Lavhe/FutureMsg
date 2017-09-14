<style lang="stylus" scoped>



</style>

<template>

<div>

  <q-list highlight>
      <q-list-header class="center">Contacts</q-list-header>
      <q-pull-to-refresh pull-message="" :handler="refreshContacts">

      </q-pull-to-refresh>
      <q-item v-for="n in 10" slot="title" icon="view_quilt" to="/chat">
          <q-item-side avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" />
          <q-item-main label="John Doe" />
      </q-item>
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
        Toast.create("Contacts refreshed");
        done();
      }
    }
}

</script>
