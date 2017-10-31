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
  <!-- TODO : Add fucntionality on JAVASCRIPT to just show msgs with title and vice a versa -->
  <q-item class="bg-light">
      <q-item-main :label="showWithTitle ? 'Showing all massages' : 'Showing msgs with title only'"/>
      <q-item-side right>
        <q-toggle v-model="showWithTitle" unchecked-icon="visibility_off" checked-icon="visibility"/>
      </q-item-side>
    </q-item>
  <q-list-header class="center text-center">Pending</q-list-header>
  <q-collapsible icon-toggle avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" label="Uzzie Sirwali">
    <q-item multiline v-for="a in 2" :class="{'bg-light text-bold':a % 2}">
      <q-item-main>
        <q-item-tile sublabel v-if="a % 2 == 0" lines="2">
          <span>John Doe - You have to know this.</span> I'll be back
        </q-item-tile>
        <q-item-tile sublabel v-else>
          <span><center>No title</center></span>
        </q-item-tile>
      </q-item-main>
      <q-item-side right>
        <q-item-tile :icon="a % 2 ? 'mail' : 'drafts'" :color="a % 2 ? 'primary' : 'secondary'" />
        <q-item-tile stamp>3{{a}} minutes left</q-item-tile>
      </q-item-side>
    </q-item>
    <q-item-separator />
  </q-collapsible>
  <q-collapsible icon-toggle avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" label="Mulavhe Joseph">
    <q-item multiline v-for="a in 4" :class="{'bg-light text-bold':a % 2}">
      <q-item-main>
        <q-item-tile sublabel v-if="a % 2 == 0" lines="2">
          <span>You have to know Stuff ASAP.</span> I'll be back
        </q-item-tile>
        <q-item-tile sublabel v-else>
          <h6><center>No title</center></h6>
        </q-item-tile>
      </q-item-main>
      <q-item-side right>
        <q-item-tile :icon="a % 2 ? 'mail' : 'drafts'" :color="a % 2 ? 'primary' : 'secondary'" />
        <q-item-tile stamp>3{{a}} minutes left</q-item-tile>
      </q-item-side>
    </q-item>
    <q-item-separator />
  </q-collapsible>

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
  QCollapsible,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile,
  QItemSeparator,
  QTabs,
  QTab,
  QToggle
} from 'quasar'

export default {
  name: 'pending',
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
    QItemSeparator,
    QTabs,
    QTab,
    QToggle
  },
  data(){
    return{
      showWithTitle:true
    }
  }
}

</script>
