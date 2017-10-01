/* eslint-disable */
<style lang="stylus" scoped>

</style>

<template>

  <div>
<!--
    <q-pull-to-refresh pull-message="" :handler="refreshContacts">

    </q-pull-to-refresh>
-->
    <q-list highlight inset-separator>
      <q-list-header class="center text-center">Pending</q-list-header>
          <q-item multiline v-for="a in 10" :class="{'bg-light text-bold':a % 2}">
               <q-item-side avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" />
               <q-item-main>
                 <q-item-tile label lines="1">
                   Uzzie Sirwali {{ a }}
                 </q-item-tile>
                 <q-item-tile sublabel lines="2">
                   <span>John Doe - You have to know this.</span> I'll be back
                 </q-item-tile>
               </q-item-main>
               <q-item-side right>
                 <q-item-tile stamp>3{{a}} minutes left</q-item-tile>
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
