<template lang="html">
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header" class="glossy">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        FutureMsg
        <div slot="subtitle"></div>
      </q-toolbar-title>
    </q-toolbar>


    <q-tabs v-model="tabCPC">
      <q-tab name="tabContacts" icon="account_circle" slot="title" />
      <q-tab name="tabChats" icon="message" slot="title" />
      <q-tab name="tabPending" icon="timer" slot="title" />
    </q-tabs>

    <contact-list v-show="tabCPC == 'tabContacts'"></contact-list>
    <pending-msgs v-show="tabCPC == 'tabPending'"></pending-msgs>
    <chat-list v-show="tabCPC == 'tabChats'"></chat-list>

    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item @click="launch('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click="launch('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click="launch('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item @click="launch('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>
  </q-layout>
</template>

<script>

import Pending from './Pending'
import ChatList from './ChatList'
import ContactList from './ContactList'
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
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
  name: 'Home',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QTabs,
    QTab,
    ContactList,
    Pending,
    ChatList
  },
  data () {
    return {
      tabCPC: 'tabChats'
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>

<style lang="stylus">
</style>
