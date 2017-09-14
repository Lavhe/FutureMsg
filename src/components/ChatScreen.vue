<style lang="stylus">

</style>

<template lang="html">

<q-layout ref="layout" view="lHh Lpr fff" :left-class="{'bg-grey-2': true}">
    <q-toolbar slot="header" class="glossy">
        <q-btn flat to="/">
          <q-icon name="keyboard_arrow_left"/>
        </q-btn>
        <q-btn flat @click="$refs.layout.toggleLeft()">
            <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
            Chat
            <div slot="subtitle">Cindy</div>
        </q-toolbar-title>

        <q-btn flat>
          <q-icon avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg"/>
        </q-btn>
        <q-btn flat>
          <q-icon name="timer" />
        </q-btn>
    </q-toolbar>

    <chat-panel Sender="Cindy" Receiver="Me"></chat-panel>

    <div slot="left">
        <q-list no-border link inset-delimiter>
            <q-item>
                <q-item-side avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" />
                <q-item-main label="Cindy" sublabel="I am a good girl you know..." />
                <q-item-side right>
                    <q-item-tile icon="mode_edit" label="30 minutes ago" />
                </q-item-side>
            </q-item>
            <q-list-header icon="chat">Pending Messages</q-list-header>
            <q-item v-ripple @click="">
                <q-item-side right label="Pending"/>
                <q-item label="Dont read this now ...." sublabel="2 Days to go" />
            </q-item>
            <q-item v-ripple @click="">
                <q-item-side right label="Pending"/>
                <q-item-label label="Dont read this now ...." sublabel="10 hours to go" />
            </q-item>
            <q-item v-ripple @click="">
                <q-item-side right label="Pending"/>
                <q-item-tile label="Dont read this now ...." sublabel="4 weeks to go" />
            </q-item>
        </q-list>
    </div>
</q-layout>

</template>

<script>

import ChatPanel from './ChatPanel'
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
    name: 'Chat',
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
        ChatPanel,
        Ripple
    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    }
}

</script>
