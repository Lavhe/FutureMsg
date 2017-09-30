/* eslint-disable */
<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
/*
 * Root component
 */
import { Toast,Cookies } from 'quasar'
export default {
  name:"App",
  // Setting cookies for global use
  components: {
    Toast,
    Cookies
  },
  mounted() {
    //do something after mounting vue instance
    this.$http.post('/api/getUserID', {number:"0760487292"}).then(response => {
        if(response.body.error){
          console.warn(response.body.error);
        }else if(response.body.userID){
          Cookies.set('userID',response.body.userID);
          console.warn("UserID captured");
        }else{
          console.warn("Invalid response");
        }
    });
  }
}
</script>

<style></style>
