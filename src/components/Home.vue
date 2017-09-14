<style lang="stylus">

</style>

<template lang="html">

<q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header" class="glossy">
        <q-btn flat @click="$refs.layout.toggleLeft()">
            <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
            FutureMsg
            <div slot="subtitle"></div>
        </q-toolbar-title>
    </q-toolbar>

    <q-tabs v-model="tabCPC">
        <q-tab name="tabContacts" icon="supervisor_account" slot="title" />
        <q-tab name="tabChats" icon="message" slot="title" />
        <q-tab name="tabPending" icon="timer" slot="title" />
    </q-tabs>

    <contact-list v-show="tabCPC == 'tabContacts'"></contact-list>
    <pending-msgs v-show="tabCPC == 'tabPending'"></pending-msgs>
    <chat-list v-show="tabCPC == 'tabChats'"></chat-list>

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
    Ripple,
    QTab
}
from 'quasar'

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
        QItemTile,
        QTabs,
        QTab,
        ContactList,
        PendingMsgs,
        Ripple,
        ChatList
    },
    data() {
        return {
            tabCPC: 'tabChats'
        }
    },
    methods: {

    },
    mounted() {

    }
}

</script>
