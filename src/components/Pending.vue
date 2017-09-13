<template>
  <div id="pending">
    <q-list highlight>
        <q-list-header class="center">Pending</q-list-header>
        <q-item>
            <q-item-side avatar="http://wallpaper-gallery.net/images/profile-pics/profile-pics-20.jpg" />
            <q-item-main label="John Doe" />
            <q-item-side right>
                <q-item-tile icon="chat_bubble" color="green" />
            </q-item-side>
        </q-item>
      </q-list>
  </div>
</template>
<script>
export default {
  name: "pending",
  data(){

  }
}
</script>
<style lang="scss" scoped>
</style>
