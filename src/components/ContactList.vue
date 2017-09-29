/* eslint-disable */
<style lang="stylus" scoped>

</style>

<template>

<div>
  <q-list highlight>
      <q-list-header class="center text-center">Contacts</q-list-header>
      <q-item v-for="contact in contacts" slot="title" icon="view_quilt" to="/chat">
          <q-item-side :avatar="contact.Avatar" />
          <q-item-main :label="contact.Name" />
      </q-item>
  </q-list>
</div>

</template>

<script>
import {
  Cookies,
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
      Cookies,
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
        msg: 'sac',
        contacts:[],
        sender:'that',
        receiver:'Jesefa'
      }
    },
    methods: {
      refreshContacts(done) {
        this.readAllContacts();
        Toast.create("Contacts refreshed");
        done();
      },
      readAllContacts(){
        var self = this;
        this.$http.get('/api/contacts/getAll').then(response => {
          self.contacts = response.data;
        });
      }
    },
    mounted() {
      //do something after mounting vue instance
      if(!self.contacts)
        this.readAllContacts();
    }
}

</script>
