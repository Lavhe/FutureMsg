/* eslint-disable */
<style lang="stylus" scoped>

</style>

<template>

<div>
  <q-list highlight separator>
    <!-- TODO : create a new window or get the native ADD contact functionality -->
    <q-item class="bg-light text-bold hoverable waves-effect" role="button" slot="title">
      <q-item-side icon="person_add" />
      <q-item-main label="Add contact" sublabel="Create a new contact" />
    </q-item>
      <q-list-header class="center text-center">Contacts</q-list-header>
      <q-item v-for="contact in contacts" slot="title" icon="view_quilt" :to="{name:'chat',params:{Receiver:contact}}">
          <q-item-side :avatar="contact.Avatar" />
          <q-item-main :label="contact.Name" :sublabel="contact.Numbers" />
          <q-item-side right slot="right">
            <q-chip small icon="mail">
              10
            </q-chip>
          </q-item-side>
      </q-item>
  </q-list>
</div>

</template>

<script>
import {
  Cookies,
  QBtn,
  QChip,
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
      QChip,
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
        contacts:[]
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
          console.warn(response.data);
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
