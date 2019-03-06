<template>
  <v-toolbar clipped-left flat color="primary darken-1" dark fixed app clipped-right>
    <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <img src="@/assets/logo.png" alt height="100%">
    </v-toolbar-title>
    <v-layout row wrap>
      <v-flex xs12 sm12 md4 lg4 px-2>
        <v-autocomplete
          flat
          solo-inverted
          hide-details
          label="Categories"
          class="hidden-sm-and-down"
          :items="categories"
          item-text="title"
        />
      </v-flex>
      <v-flex xs12 sm12 md7 lg7>
        <v-text-field
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="search"
          label="Search"
          class="hidden-sm-and-down"
        />
      </v-flex>
    </v-layout>

    <v-spacer></v-spacer>
    <v-btn icon>
      <img src="@/assets/flag.jpeg" alt height="17px" width="30px">
    </v-btn>

    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>

    <v-btn icon @click="$router.push({name:'cart-list'})">
      <v-icon>add_shopping_cart</v-icon>
      <sup>
        <v-avatar size="20" color="red">
          <strong>3</strong>
        </v-avatar>
      </sup>
    </v-btn>
    <v-btn flat @click="$router.push({name:'login'})">Sign in</v-btn>
  </v-toolbar>
</template>

<script>
import { eventBus } from "@/main.js";
export default {
  data() {
    return {
      categories: [
        { title: "All" },
        { title: "Computers" },
        { title: "Mobiles" },
        { title: "Accessories" },
        { title: "Men's" },
        { title: "Female's" }
      ]
    };
  },
  methods: {
    toggleDrawer() {
      eventBus.$emit("toggleDrawer", "data");
    }
  }
};
</script>






