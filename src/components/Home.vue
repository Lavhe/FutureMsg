<style lang="stylus">
.HomeIcon
  width 20px
  height 20px

</style>

<template lang="html">

  <q-layout @scroll="scrollHandler" ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header" class="">
      <q-btn flat @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title v-show="!OnSearchPanel">

        <q-btn class="pull-right" flat v-on:click="OnSearchPanel = true">
          <q-icon name="search" />
        </q-btn>

        <q-label class="text-center">FutureMsg</q-label>
        <div v-if="scrolledPastTab" slot="subtitle">
          <q-tabs v-model="tabCPC" slot="subtitle">
            <q-tab name="tabContacts" icon="supervisor_account" slot="title" />
            <q-tab name="tabChats" icon="message" slot="title" />
            <q-tab name="tabPending" icon="timer" slot="title" />
          </q-tabs>
        </div>
        <div v-if="!scrolledPastTab" slot="subtitle">
          Chat in the future
        </div>
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
      <q-tabs ref="theTab" v-model="tabCPC" slot="header">
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
    {{victimHeight}}
    <q-fixed-position corner="bottom-right" :offset="[18, 18]">
      <q-fab
      direction="up"
      color="primary"
      icon="expand_less">
      <q-fab-action
      color="secondary"
      @click="attachMoney"
      icon="attach_money"/>
      <q-fab-action
      color="secondary"
      @click="$refs.layoutModal.open()"
      icon="add_alarm"/>
      <q-fab-action
      color="secondary"
      @click="$refs.layout.toggleLeft()"
      icon="settings"/>
    </q-fab>
  </q-fixed-position>

  <q-modal ref="layoutModal" maximized
  @open="notify('open')"
  @escape-key="notify('escape-key')"
  @close="notify('close')">
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
        <q-btn flat class="text-center v-ripple center fit" color="secondary" >Set Msg</q-btn>
      </div>
    </q-toolbar>
    <q-card class="shadow-0">
      <q-card-main>
        <q-select
        v-model="msgTo"
        float-label="Send to : "
        radio
        :options="[{label:'joe',value:0},{label:'uzzie',value:1},{label:'them',value:3}]"
        />
      </q-card-main>
      <q-card-main class="card">
        <q-input
        type="text"
        v-model="msgTitle"
        float-label="Msg Title"
        :after="[
        {
          icon: 'help_outline',
          content: false,
          handler:showMsgTitleInfo
        }
        ]"
        />
      </q-card-main>
      <q-card-main class="card">
        <q-input
        v-model="msgText"
        type="textarea"
        float-label="Msg"
        :after="[
        {
          icon: 'help_outline',
          content: false,
          handler:showMsgInfo
        }
        ]"
        />
      </q-card-main>
      <q-card-main>
        <div class="row">
          <div class="col-12">
            <span class="text-center">When to send the Msg?</span>
          </div>
          <div class="col-6">
            <q-datetime
            placeholder="Pick a valid date"
            type="date"
            v-model="msgDate"
            :error="!msgDate"
            :min="new Date()"
            v-on:change="updateDateTimeLeft"
            stack-label="Choose a due date"
            />
          </div>
          <div class="col-6">
            <q-datetime
            placeholder="Pick a valid time"
            type="time"
            v-on:change="updateDateTimeLeft"
            :error="!msgTime"
            v-model="msgTime"
            stack-label="Choose a due time"
            />
          </div>
        </div>
      </q-card-main>
      <q-card-main>
        <div class="text-center">
          {{msgDateTimeLeft}}
        </div>
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
  Cookies,
  Dialog,
  QLayout,
  Toast,
  QCard,
  QLabel,
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
  QTab
}
from 'quasar'

export default {
  name: 'Home',
  components: {
    Cookies,
    Dialog,
    Toast,
    QLayout,
    QCard,
    QLabel,
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
    ContactList,
    PendingMsgs,
    ChatList
  },
  data() {
    return {
      msgDate:new Date(),
      msgTime:new Date(),
      msgTo:'',
      msgTitle:'',
      msgText:'',
      msgDateTimeLeft:'',
      tabCPC: 'tabChats',
      OnSearchPanel:false,
      txtSearch:'',
      scrolledPastTab:false
    }
  },
  methods: {
    scrollHandler(){
      try {
        this.scrolledPastTab = window.scrollY > this.$refs.theTab.currentEl.clientHeight;
      } catch (e) {}
    },
    attachMoney(){
      var self = this;
      Dialog.create({
        title: 'Donate to us!',
        message: `Hit us with your email address and we will contact you.`,
        form: {
          email: {
            type: 'email',
            label: 'Your email address',
            model: ''
          },
        },
        buttons: [
          'Cancel',
          {
            label: 'Ok',
            handler (data) {
              self.saveMail("donate",data.email)
            }
          }
        ],
        position:'top'
      });
      Toast.create('Help us grow');
    },
    saveMail(why,email){
      console.warn(why + " .... " + email);
    },
    showMsgInfo(){
      Toast.create({html:"The actual Msg, Receiver will read this only after the due date",timeout: 6000});
    },
    showMsgTitleInfo(){
      Toast.create({html:"The title of your Msg, Receiver will see this before the due date",timeout: 6000});
    },
    updateDateTimeLeft(){
      Toast.create("Updating datetime left....");
      if(!this.msgDate){
        this.msgDateTimeLeft = "Choose a valid date";
      }else{
        if(!this.msgTime){
          this.msgDateTimeLeft = "Choose a valid time";
        }else{
          Toast.create("Updating ....");
          this.msgDate.setHours(this.msgTime.getHours(),this.msgTime.getMinutes(),0);
          this.msgDateTimeLeft = "Message will be sent after : " +  this.msgDate;
        }
      }
    }
  },
  mounted() {
    var value = Cookies.get('userID');
    console.log(value);

  }
}

</script>
