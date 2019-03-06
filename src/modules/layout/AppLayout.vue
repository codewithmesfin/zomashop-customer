<template>
  <div>
    <nav-bar/>
    <side-bar/>
    <v-content>
      <router-view/>
    </v-content>
    <app-footer/>
  </div>
</template>


<script>
import NavBar from "./NavBar.vue";
import SideBar from "./SideBar";
import AppFooter from "./Footer";

export default {
  data() {
    return {};
  },
  components: {
    NavBar,
    SideBar,
    AppFooter
  }
};
</script>

<style>
</style>


