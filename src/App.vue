<template>
  <v-app id="app">
    <div id="app-loading" class="grey lighten-3">
      <v-container fluid fill-height>
        <v-layout align-center column flex justify-center class="align-center">
          <img src="@/assets/logo.png" alt>
          <h1 class="my-3 primary--text">Zoma Shop</h1>
          <hollow-dots-spinner
            :animation-duration="5000"
            :dot-size="20"
            :dots-num="5"
            color="green"
          />
        </v-layout>
      </v-container>
    </div>

    <template v-if="showNetworkProgressBar">
      <v-progress-linear
        indeterminate
        height="2"
        color="sidebarColor"
        style="margin:0; top:0; position:fixed; z-index:999999;"
      />
      <v-progress-circular
        style="margin:0; top:0; right:0;position:fixed; z-index:999999;"
        size="20"
        :width="2"
        color="sidebarColor"
        indeterminate
      />
    </template>

    <!-- notifications container -->
    <notifications :overlap="true"/>

    <!-- modals container -->
    <modals-container/>

    <!-- page content   -->
    <div style="background-color:#f3f3f3 !important">
      <router-view/>
    </div>
  </v-app>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import { HollowDotsSpinner } from "epic-spinners";

export default {
  components: {
    HollowDotsSpinner
  },
  computed: {
    ...mapGetters("core", ["showNetworkProgressBar"]),
    ...mapState("core", ["appName"])
  },
  beforeCreate() {
    this.$store.commit("core/initializeStore");
    this.$store.commit("theme/initializeStore");

    this.$store.subscribe((mutation, state) => {
      localStorage.setItem(
        "currentLanguage",
        JSON.stringify(state.core.currentLanguage)
      );
      localStorage.setItem("darkTheme", JSON.stringify(state.theme.darkTheme));
    });
  },
  created() {
    // when everything is loaded, hide the loading div element
    window.onload = () => {
      const appLoadingDiv = document.getElementById("app-loading");
      appLoadingDiv.style.display = "none";
    };
  },
  methods: {}
};
</script>


<style lang="scss">
#app-loading {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
}

.csv-download-icon {
  transform: rotate(180deg);
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #9a9a9a;
}

.notifications.vue-notifyjs > span > div > span > span > b {
  font-size: 0.8em;
}

// form input
.theme--light .v-text-field--outline .v-input__slot {
  border: 1px solid #adadad;
}
.theme--light
  .v-text-field--outline:not(.v-input--is-focused)
  .v-input__slot:hover {
  border: 1px solid rgba(0, 0, 0, 0.87);
}

.label-text {
  color: #a7a1a1;
}

/*
  This is a workaround for an issue occuring related to modals. When a modal
  is shown if its height is 'auto' with scrollable 'true', and a pivotY
  value is provided, the correct pivotY value effect occurs only when
  the modal is clicked once.
  So as a workaround, we always set pivotY value to 0 and here we set (force)
  the distance between the top of the window and the modal.
*/
.v--modal-box.v--modal {
  top: 50px !important;
}

// to decrease the right padding of toolbar on modals, for the (x) button
.modal-toolbar .v-toolbar__content {
  padding-right: 14px !important;
}
</style>