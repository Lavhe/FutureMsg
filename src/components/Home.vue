<style lang="stylus">
.HomeIcon
  width 20px
  height 20px

</style>

<template lang="html">

  <q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header" class="glossy">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title v-show="!OnSearchPanel">
        FutureMsg
        <div slot="subtitle">
          Chat in the future.
        </div>
        <q-btn class="pull-right" flat v-on:click="OnSearchPanel = true">
          <q-icon name="search" />
        </q-btn>
      </q-toolbar-title>

      <q-toolbar-title v-show="OnSearchPanel">
        <q-btn class="pull-right" flat v-on:click="OnSearchPanel = false">
          <q-icon name="close" />
        </q-btn>
        <div slot="subtitle">
          <q-search v-model="txtSearch" align="center" />
        </div>
      </q-toolbar-title>
    </q-toolbar>

    <div v-show="!OnSearchPanel">
      <q-tabs v-model="tabCPC">
        <q-tab name="tabContacts" icon="supervisor_account" slot="title" />
        <q-tab name="tabChats" icon="message" slot="title" />
        <q-tab name="tabPending" icon="timer" slot="title" />
      </q-tabs>

      <contact-list v-show="tabCPC == 'tabContacts'"></contact-list>
      <pending-msgs v-show="tabCPC == 'tabPending'"></pending-msgs>
      <chat-list v-show="tabCPC == 'tabChats'"></chat-list>
    </div>
    <div v-show="OnSearchPanel">
      Results ...
    </div>

    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-fab
      direction="up"
      color="primary"
      icon="expand_less">
      <q-fab-action
      color="primary"
      @click="alert()"
      icon="add_alarm"/>
      <q-fab-action
      color="secondary"
      @click="$refs.layoutModal.open()"
      icon="timer"/>
      <q-fab-action
      color="secondary"
      @click="alert()"
      icon="settings"/>
    </q-fab>
  </q-fixed-position>

  <q-modal ref="layoutModal" maximized
  @open="notify('open')"
  @escape-key="notify('escape-key')"
  @close="notify('close')"
  >
  <q-modal-layout>
    <q-toolbar slot="header">
      <q-btn flat @click="$refs.layoutModal.close()">
        <q-icon name="keyboard_arrow_left" />
      </q-btn>
      <div class="q-toolbar-title">
        Set a Pending Msg
      </div>
    </q-toolbar>
    <q-toolbar class="transparent" slot="footer">
      <div class="q-toolbar-title text-center">
        <q-btn flat class="text-center v-ripple center" color="secondary" >Set Msg</q-btn>
      </div>
    </q-toolbar>
    <q-card class="shadow-0">
      <q-card-main>
          <q-select
             v-model="select"
             float-label="Send to : "
             radio
             :options="[{label:'joe',value:0},{label:'uzzie',value:1},{label:'them',value:3}]"
          />
      </q-card-main>
      <q-card-main class="card">
        <q-input type="text" float-label="Msg Title" />
      </q-card-main>
      <q-card-main class="card">
        <q-input v-model="area" type="textarea" float-label="Msg" />
      </q-card-main>
      <q-card-main>
        <q-datetime
        :display-value="dateTime ? dateTime : 'Please Pick a valid date'"
        type="datetime"
        v-model="dateTime"
        :min="new Date()"
        stack-label="Choose a due date and time"
        format24h />
      </q-card-main>

    </q-card>
  </q-modal-layout>
</q-modal>

<div slot="left">
  <q-list no-border link inset-delimiter>
    <q-list-header>Profile</q-list-header>
    <q-item>
      <q-item-side avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" />
      <q-item-main label="Uzzie" sublabel="I am good boy you know..." />
      <q-item-side right>
        <q-item-tile icon="mode_edit" />
      </q-item-side>
    </q-item>
    <q-list-header>Settings</q-list-header>
    <q-item v-ripple @click="">
      <q-item-side icon="account_circle" />
      <q-item-main label="Account" sublabel="Privacy, Security, Delete" />
    </q-item>
    <q-item v-ripple @click="">
      <q-item-side icon="notifications" />
      <q-item-main label="Notifications" sublabel="Tone, Vibrate, Light, Popup" />
    </q-item>
    <q-item v-ripple @click="">
      <q-item-side icon="help_outline" />
      <q-item-main label="Help" sublabel="FAQ, Contact us, T's and C's" />
    </q-item>
    <q-item v-ripple @click="">
      <q-item-side icon="info_outline" />
      <q-item-main label="About" sublabel="Version, App info" />
    </q-item>
  </q-list>
</div>
</q-layout>

</template>

<script>

import PendingMsgs from './PendingMsgs'
import ChatList from './ChatList'
import ContactList from './ContactList'
import {
  QLayout,
  QCard,
  QCardTitle,
  QCardMain,
  QCardSeparator,
  QSelect,
  QFab,
  QInput,
  QField,
  QModal,
  QDatetime,
  QModalLayout,
  QFabAction,
  QFixedPosition,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QItemTile,
  QTabs,
  QSearch,
  VRipple,
  QTab
}
from 'quasar'

export default {
  name: 'Home',
  components: {
    QLayout,
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    QToolbar,
    QField,
    QSelect,
    QInput,
    QSearch,
    QDatetime,
    QModal,
    QModalLayout,
    QFab,
    QFabAction,
    QFixedPosition,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QItemTile,
    QTabs,
    QTab,
    VRipple,
    ContactList,
    PendingMsgs,
    ChatList
  },
  data() {
    return {
      dateTime:null,
      tabCPC: 'tabChats',
      OnSearchPanel:false,
      txtSearch:''
    }
  },
  methods: {

  },
  mounted() {

  }
}

</script>
